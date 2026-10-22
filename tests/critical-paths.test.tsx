import { createElement, type ImgHTMLAttributes } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, expect, it, vi } from 'vitest';
import { ContextoProvider } from '../appContext';
import {
  EMAIL,
  NAV_LINKS,
  NETLIFY_FORMS_ENDPOINT,
  SUBMIT_MESSAGES,
  VALIDATION,
} from '../constants';
import { ThemeProvider } from '../contexts/ThemeContext';
import Home from '../pages';

let finishDelay: () => void = () => undefined;

vi.mock('next/image', () => ({
  default: ({
    priority: _priority,
    ...props
  }: ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean }) => createElement('img', props),
}));

vi.mock('../components/helpers', async () => {
  const actual =
    await vi.importActual<typeof import('../components/helpers')>('../components/helpers');
  return {
    ...actual,
    delay: () =>
      new Promise<void>((resolve) => {
        finishDelay = resolve;
      }),
  };
});

const fetchMock = vi.fn();

const CONTACT_FIELDS = ['name', 'email', 'phoneNumber', 'message', 'bot-field'] as const;

async function renderSite(): Promise<ReturnType<typeof userEvent.setup>> {
  const user = userEvent.setup();
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
  finishDelay = () => undefined;
  fetchMock.mockReset();
  vi.stubGlobal('fetch', fetchMock);
  vi.spyOn(console, 'error').mockImplementation(() => undefined);
});

it('shows the profile, section navigation, and contact form', async () => {
  await renderSite();

  expect(
    screen.getByText('TechOps Engineer / Escalation Engineer / Software Engineer / Teacher')
  ).toBeInTheDocument();
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

  const forms = document.querySelectorAll('form[name="contact"]');
  expect(forms).toHaveLength(2);
  for (const form of forms) {
    expect(form).toHaveAttribute('data-netlify', 'true');
    expect(form).toHaveAttribute('data-netlify-honeypot', 'bot-field');
    expect(form.querySelector('[name="form-name"]')).toHaveAttribute('value', 'contact');
    for (const field of CONTACT_FIELDS) {
      expect(form.querySelector(`[name="${field}"]`)).toBeTruthy();
    }
  }
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
  expect(fetchMock).not.toHaveBeenCalled();
});

it('sends a valid contact message', async () => {
  fetchMock.mockResolvedValue({ ok: true });
  const user = await renderSite();
  await fillValidMessage(user);

  await user.click(screen.getByRole('button', { name: 'Send message' }));

  expect(await screen.findByRole('status')).toHaveTextContent(SUBMIT_MESSAGES.SUCCESS);
  expect(fetchMock).toHaveBeenCalledWith(NETLIFY_FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      'form-name': 'contact',
      'bot-field': '',
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      phoneNumber: '',
      message: 'I would like to talk about a role.',
    }).toString(),
  });
  expect(screen.getByLabelText('Name')).toHaveValue('');
  expect(screen.getByLabelText('Email')).toHaveValue('');
  expect(screen.getByLabelText('Message')).toHaveValue('');

  finishDelay();
  await waitFor(() => {
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });
  expect(screen.getByRole('button', { name: 'Send message' })).toBeEnabled();
});

it('shows an error when a contact message cannot be delivered', async () => {
  fetchMock.mockRejectedValue(new Error('offline'));
  const user = await renderSite();
  await fillValidMessage(user);

  await user.click(screen.getByRole('button', { name: 'Send message' }));

  expect(await screen.findByRole('status')).toHaveTextContent(SUBMIT_MESSAGES.ERROR);
  expect(screen.getByLabelText('Name')).toHaveValue('Ada Lovelace');
  expect(screen.getByLabelText('Email')).toHaveValue('ada@example.com');
  expect(screen.getByLabelText('Message')).toHaveValue('I would like to talk about a role.');

  finishDelay();
  await waitFor(() => {
    expect(screen.getByRole('button', { name: 'Send message' })).toBeEnabled();
  });
});
