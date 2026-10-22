/**
 * App-wide constants in a single location.
 */

// ─── Theme ──────────────────────────────────────────────────────────────────
export const THEME_CHOICE_KEY = 'theme-choice';

// ─── Navigation ─────────────────────────────────────────────────────────────
export const SECTION_IDS = [
  'projects',
  'experience',
  'education',
  'about',
  'skills',
  'contact',
] as const;

export const CONTACT_TARGET = '#contact';

export interface NavLink {
  label: string;
  target: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Work', target: '#projects' },
  { label: 'Experience', target: '#experience' },
  { label: 'Education', target: '#education' },
  { label: 'About', target: '#about' },
  { label: 'Skills', target: '#skills' },
  { label: 'Contact', target: CONTACT_TARGET },
];

// Intersection Observer (current section highlight)
export const INTERSECTION_OBSERVER_ROOT_MARGIN = '-80px 0px -60% 0px';
export const INTERSECTION_OBSERVER_THRESHOLDS = [0, 0.1, 0.25, 0.5, 0.75, 1] as const;

// ─── Scroll / layout ────────────────────────────────────────────────────────
export const NAVBAR_HEIGHT_PX = 80;
export const BACK_TO_TOP_SHOW_AFTER_PX = 400;

export const EMAIL = 'baileyalwayne@gmail.com';

export function maskEmail(email: string = EMAIL): string {
  const [local, domain] = email.split('@');
  if (!local || !domain) return email;
  return `${local.slice(0, 1)}••••@${domain}`;
}

// ─── Contact form ──────────────────────────────────────────────────────────
export const FORM_NAME = 'contact';
/** Static Netlify Forms endpoint (must match public/__forms.html). */
export const NETLIFY_FORMS_ENDPOINT = '/__forms.html';
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const VALIDATION = {
  NAME_MIN_LENGTH: 2,
  MESSAGE_MIN_LENGTH: 10,
  NAME_REQUIRED: 'Name is required.',
  NAME_MIN: 'Please enter at least 2 characters.',
  EMAIL_REQUIRED: 'Email is required.',
  EMAIL_INVALID: 'Please enter a valid email address.',
  MESSAGE_REQUIRED: 'Message is required.',
  MESSAGE_MIN: 'Please enter at least 10 characters.',
} as const;

export const SUBMIT_MESSAGES = {
  SUCCESS: 'Message successfully sent!',
  ERROR: 'Error, please try again later.',
} as const;
