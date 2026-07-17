// Site-wide constants. Single source of truth for CTA destinations and brand
// facts so a later decision changes one line, not thirty pages.

export const SITE_NAME = 'MLogTech'; // [PENDENTE: casing oficial da marca]
export const SITE_TAGLINE = 'Delivery management software with electronic proof of delivery';

// Decision 07/17/2026: signup exists (or ships with the site launch).
export const SIGNUP_URL = 'https://app.mlogtech.com/signup';
export const LOGIN_URL = 'https://app.mlogtech.com/login';

export const SALES_EMAIL = 'sales@mlogtech.com';
export const SUPPORT_EMAIL = 'support@mlogtech.com';
export const OFFICES = ['London', 'Dubai', 'Brazil'];

// CTA labels: one text per intent, everywhere (SPEC-02 transversal rules).
export const CTA_PRIMARY = 'Try for free';
export const CTA_SECONDARY = 'Book a demo';

// Demo videos from the current site (INDEX.md do scrape).
export const VIDEO_PLATFORM_DEMO = 'https://www.youtube.com/embed/GVzrrynXtgQ';
export const VIDEO_DRIVER_DEMO = 'https://www.youtube.com/embed/ZPMKwatRb40';
