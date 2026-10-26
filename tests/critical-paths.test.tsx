import emailjs from '@emailjs/browser';
import { createElement, type ImgHTMLAttributes } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { ContextoProvider } from '../appContext';
import { EMAIL, NAV_LINKS, SUBMIT_MESSAGES, VALIDATION } from '../constants';
import { ThemeProvider } from '../contexts/ThemeContext';
import Home from '../pages';

vi.mock('next/image', () => ({
  default: ({
    priority: _priority,
    ...props
  }: ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean }) => createElement('img', props),
}));

vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn(),
  },
}));

process.env.NEXT_PUBLIC_SERVICE_ID = 'service';
process.env.NEXT_PUBLIC_TEMPLATE_ID = 'template';
process.env.NEXT_PUBLIC_USER_ID = 'user';

async function renderSite(): Promise<ReturnType<typeof userEvent.setup>> {
  const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
  render(
    <ThemeProvider>
      <ContextoProvider>
        <Home />
      </ContextoProvider>
    </ThemeProvider>
  );
  await screen.findByRole('heading', { level: 1, name: 'Alwayne Bailey' });
  return user;
}

async function fillValidMessage(user: ReturnType<typeof userEvent.setup>): Promise<void> {
  await user.type(screen.getByLabelText('Name'), 'Ada Lovelace');
  await user.type(screen.getByLabelText('Email'), 'ada@example.com');
  await user.type(screen.getByLabelText('Message'), 'I would like to talk about a role.');
}

beforeEach(() => {
  localStorage.clear();
  vi.useFakeTimers({ shouldAdvanceTime: true });
  vi.mocked(emailjs.send).mockReset();
  vi.spyOn(console, 'error').mockImplementation(() => undefined);
});

afterEach(() => {
  vi.useRealTimers();
});

it('shows the profile, section navigation, and contact form', async () => {
  await renderSite();

  expect(screen.getByText('TechOps Engineer')).toBeInTheDocument();
  expect(screen.getByText('Teacher')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Email Alwayne Bailey' })).toHaveAttribute(
    'href',
    `mailto:${EMAIL}`
  );

  for (const href of [
    'https://github.com/baileyalo',
    'https://www.linkedin.com/in/alwayne-bailey/',
  ]) {
    const links = screen.getAllByRole('link').filter((link) => link.getAttribute('href') === href);
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
  }

  for (const link of NAV_LINKS) {
    const anchors = screen.getAllByRole('link', { name: link.label, hidden: true });
    expect(anchors).toHaveLength(2);
    for (const anchor of anchors) {
      expect(anchor).toHaveAttribute('href', link.target);
    }
    expect(document.getElementById(link.target.slice(1))).toBeInTheDocument();
  }

  expect(screen.getByRole('form', { name: 'Contact form' })).toBeInTheDocument();
  expect(screen.getByLabelText('Name')).toBeInTheDocument();
  expect(screen.getByLabelText('Email')).toBeInTheDocument();
  expect(screen.getByLabelText('Message')).toBeInTheDocument();
});

it('opens the contact section from the primary call to action', async () => {
  const user = await renderSite();

  await user.click(screen.getByRole('link', { name: 'Get in touch' }));

  expect(window.location.hash).toBe('#contact');
  expect(document.getElementById('contact')).toBeInTheDocument();
});

it('blocks an incomplete contact submission', async () => {
  const user = await renderSite();

  await user.click(screen.getByRole('button', { name: 'Send message' }));

  expect(screen.getByText(VALIDATION.NAME_REQUIRED)).toBeInTheDocument();
  expect(screen.getByText(VALIDATION.EMAIL_REQUIRED)).toBeInTheDocument();
  expect(screen.getByText(VALIDATION.MESSAGE_REQUIRED)).toBeInTheDocument();
  expect(emailjs.send).not.toHaveBeenCalled();
});

it('sends a valid contact message', async () => {
  vi.mocked(emailjs.send).mockResolvedValue({ status: 200, text: 'OK' });
  const user = await renderSite();
  await fillValidMessage(user);

  await user.click(screen.getByRole('button', { name: 'Send message' }));

  expect(await screen.findByRole('status')).toHaveTextContent(SUBMIT_MESSAGES.SUCCESS);
  expect(emailjs.send).toHaveBeenCalledWith(
    'service',
    'template',
    {
      from_name: 'Ada Lovelace',
      message: 'I would like to talk about a role.',
      phone: '',
      from_email: 'ada@example.com',
    },
    'user'
  );
  expect(screen.getByLabelText('Name')).toHaveValue('');
  expect(screen.getByLabelText('Email')).toHaveValue('');
  expect(screen.getByLabelText('Message')).toHaveValue('');
  expect(screen.getByRole('button', { name: 'Sent' })).toBeDisabled();

  await vi.advanceTimersByTimeAsync(5000);
  await waitFor(() => {
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });
  expect(screen.getByRole('button', { name: 'Send message' })).toBeEnabled();
});

it('shows an error when a contact message cannot be delivered', async () => {
  vi.mocked(emailjs.send).mockRejectedValue(new Error('emailjs'));
  const user = await renderSite();
  await fillValidMessage(user);

  await user.click(screen.getByRole('button', { name: 'Send message' }));

  expect(await screen.findByRole('status')).toHaveTextContent(SUBMIT_MESSAGES.ERROR);
  expect(screen.getByLabelText('Name')).toHaveValue('Ada Lovelace');
  expect(screen.getByLabelText('Email')).toHaveValue('ada@example.com');
  expect(screen.getByLabelText('Message')).toHaveValue('I would like to talk about a role.');
  expect(screen.getByRole('button', { name: 'Try again' })).toBeEnabled();

  await vi.advanceTimersByTimeAsync(5000);
  await waitFor(() => {
    expect(screen.getByRole('button', { name: 'Send message' })).toBeEnabled();
  });
});
