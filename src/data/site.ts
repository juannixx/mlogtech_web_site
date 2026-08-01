// Site-wide constants. Single source of truth for CTA destinations and brand
// facts so a later decision changes one line, not thirty pages.

export const SITE_NAME = 'MLogTech'; // [PENDENTE: casing oficial da marca]
export const SITE_TAGLINE = 'Delivery management software with electronic proof of delivery';

// Decision 07/31/2026: signup CTAs hidden until the trial flow is ready.
// Flip SHOW_SIGNUP_CTA back to true to restore every "Try for free" button.
export const SHOW_SIGNUP_CTA = false;
export const SIGNUP_URL = 'https://app.mlogtech.com/signup';
export const LOGIN_URL = 'https://molina-express-app.web.app/client/login';

// Mobile app store listings (badges live in public/images/badges/).
export const APP_STORE_URL = 'https://apps.apple.com/br/app/mlog-tech/id6749288842';
export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.jw.molinaexpress.molinaexpressflutter&hl=pt_BR';

export const SALES_EMAIL = 'sales@mlogtech.com';
export const SUPPORT_EMAIL = 'support@mlogtech.com';
export const OFFICES = ['London', 'Dubai', 'Brazil'];

// CTA labels: one text per intent, everywhere (SPEC-02 transversal rules).
export const CTA_PRIMARY = 'Try for free';
export const CTA_SECONDARY = 'Book a demo';

// Demo videos from the current site (INDEX.md do scrape).
// Decision 07/31/2026: hidden while the walkthroughs are being reworked.
// Flip SHOW_DEMO_VIDEOS back to true to restore the "Prefer to watch first?" block.
export const SHOW_DEMO_VIDEOS = false;
export const VIDEO_PLATFORM_DEMO = 'https://www.youtube.com/embed/GVzrrynXtgQ';
export const VIDEO_DRIVER_DEMO = 'https://www.youtube.com/embed/ZPMKwatRb40';

// Umami Cloud analytics (spec 2026-08-01, PR A). ID vazio = script não injetado.
export const UMAMI_WEBSITE_ID = ''; // [PENDENTE: ID real de cloud.umami.is]
export const UMAMI_SRC = 'https://cloud.umami.is/script.js';

// Agregados de produção verificados (tenant Molina via Firestore, 01/08/2026).
// Regras de honestidade e pisos: docs/superpowers/specs/2026-08-01-lp-quickwins-verion-design.md.
// São pisos "X+": só alterar com nova verificação na fonte.
export const PROOF_STATS = [
  { value: 200, prefix: '£', suffix: 'k+', label: 'in driver payments processed' },
  { value: 5600, prefix: '', suffix: '+', label: 'shifts scheduled' },
  { value: 160, prefix: '', suffix: '+', label: 'drivers managed' },
  { value: 80, prefix: '', suffix: '+', label: 'vehicles in one operation' },
] as const;
