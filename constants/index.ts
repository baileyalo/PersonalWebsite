/**
 * App-wide constants in a single location.
 */

// ─── Navigation ─────────────────────────────────────────────────────────────
export const SECTION_IDS = ["about", "experience", "education", "skills", "projects"] as const;

export const CONTACT_TARGET = "#contact";

export interface NavLink {
  label: string;
  target: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "about me", target: "#about" },
  { label: "experience", target: "#experience" },
  { label: "education", target: "#education" },
  { label: "skills", target: "#skills" },
  { label: "projects", target: "#projects" },
  { label: "contact", target: CONTACT_TARGET },
];

// Intersection Observer (current section highlight)
export const INTERSECTION_OBSERVER_ROOT_MARGIN = "-80px 0px -60% 0px";
export const INTERSECTION_OBSERVER_THRESHOLDS = [0, 0.1, 0.25, 0.5, 0.75, 1] as const;

// ─── Scroll / layout ────────────────────────────────────────────────────────
export const NAVBAR_HEIGHT_PX = 80;
export const BACK_TO_TOP_SHOW_AFTER_PX = 400;

// ─── Contact form ──────────────────────────────────────────────────────────
export const FORM_NAME = "contact";
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const VALIDATION = {
  NAME_MIN_LENGTH: 2,
  MESSAGE_MIN_LENGTH: 10,
  NAME_REQUIRED: "Name is required.",
  NAME_MIN: "Please enter at least 2 characters.",
  EMAIL_REQUIRED: "Email is required.",
  EMAIL_INVALID: "Please enter a valid email address.",
  MESSAGE_REQUIRED: "Message is required.",
  MESSAGE_MIN: "Please enter at least 10 characters.",
} as const;

export const SUBMIT_MESSAGES = {
  SUCCESS: "Sent!",
  ERROR: "Error, please try Again later",
} as const;
