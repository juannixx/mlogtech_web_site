// ============================================================================
// PRICING DATA: PROVISIONAL, benchmarked on Track-POD (SPEC-05).
// Manager direction (20/07/2026): base pricing on the competitor Track-POD.
// Values below are derived from Track-POD's published plans (captured in
// web-scraping-track-POD/output/pricing-plans.json), adapted to GBP and to
// our structure, and positioned as the challenger: a no-minimum entry tier
// below their floor, and per-order rates a touch under theirs.
//   Track-POD per driver (USD): $49/$69/$89 (min 3 drivers).
//   Track-POD per order (USD):  $285/1.5k, $510/3k, $900/6k, $1440/12k.
// These are NOT yet the company's officially signed-off prices, so
// PRICING_CONFIRMED stays false: no Product/Offer JSON-LD is emitted and a
// "provisional pricing" badge shows in dev. Flip to true after sign-off.
// ============================================================================

// Kept the export name MOCK_PRICING for the page's import; semantics now =
// "not final". True while prices await commercial sign-off.
export const MOCK_PRICING = true;
export const CURRENCY = '£';
export const TRIAL_DAYS = 14; // [PENDENTE: confirmar; Track-POD usa trial curto]
export const ANNUAL_DISCOUNT_LABEL = 'save ~17%'; // matches Track-POD annual vs monthly

export interface DriverPlan {
  name: string;
  monthly: number | null; // null = talk to sales
  annual: number | null; // per driver per month, billed annually
  highlights: string[];
  popular?: boolean;
  cta: 'trial' | 'sales';
}

export const driverPlans: DriverPlan[] = [
  {
    name: 'Essential',
    annual: 29,
    monthly: 35,
    highlights: [
      'No driver minimum',
      '1 web user',
      'Route planning and optimisation',
      'Driver app with ePOD',
      'Live tracking',
    ],
    cta: 'trial',
  },
  {
    name: 'Growth',
    annual: 49,
    monthly: 59,
    popular: true,
    highlights: [
      'Everything in Essential',
      '5 web users',
      'Customer notifications',
      'Customer portal',
      'Shipping labels',
      'Analytics and reports',
    ],
    cta: 'trial',
  },
  {
    name: 'Advanced',
    annual: 69,
    monthly: 79,
    highlights: [
      'Everything in Growth',
      'Unlimited web users',
      'API and webhooks',
      'Geofencing',
      'Cash on delivery',
      'Priority support',
    ],
    cta: 'trial',
  },
  {
    name: 'Enterprise',
    annual: null,
    monthly: null,
    highlights: [
      'Custom volumes and SLA',
      'Dedicated onboarding',
      'Custom integrations',
      'Security review support',
    ],
    cta: 'sales',
  },
];

export interface OrderPlan {
  name: string;
  monthly: number;
  orders: number;
  perOrder: string;
  popular?: boolean;
  cta: 'trial' | 'sales';
}

// Volumes mirror Track-POD (1.5k / 3k / 6k / 12k); GBP monthly set just under
// their USD figures, so the effective per-order rate undercuts theirs.
export const orderPlans: OrderPlan[] = [
  { name: 'S', monthly: 245, orders: 1500, perOrder: '0.16', cta: 'trial' },
  { name: 'M', monthly: 445, orders: 3000, perOrder: '0.15', popular: true, cta: 'trial' },
  { name: 'L', monthly: 795, orders: 6000, perOrder: '0.13', cta: 'trial' },
  { name: 'XL', monthly: 1245, orders: 12000, perOrder: '0.10', cta: 'sales' },
];

// Comparison matrix, grouped in the 12 categories mapped from Track-POD
// (SPEC-05 section 4). The category structure is benchmark-confirmed; the
// per-plan cell values still await our own product catalog confirmation.
export type Cell = boolean | string;
export interface CompareRow {
  label: string;
  values: [Cell, Cell, Cell, Cell]; // Essential, Growth, Advanced, Enterprise
}
export interface CompareGroup {
  group: string;
  rows: CompareRow[];
}

export const compare: CompareGroup[] = [
  {
    group: 'User management',
    rows: [
      { label: 'Web users', values: ['1', '5', 'Unlimited', 'Unlimited'] },
      { label: 'Drivers', values: ['No minimum', 'No minimum', 'No minimum', 'Custom'] },
      { label: 'Roles and permissions', values: [false, true, true, true] },
    ],
  },
  {
    group: 'Orders',
    rows: [
      { label: 'Orders per driver / month', values: ['500', '2,000', 'Unlimited', 'Custom'] },
      { label: 'CSV and spreadsheet import', values: [true, true, true, true] },
      { label: 'Custom order fields', values: [false, true, true, true] },
    ],
  },
  {
    group: 'Organisation',
    rows: [
      { label: 'Multiple depots', values: [false, true, true, true] },
      { label: 'Multi-company', values: [false, false, true, true] },
    ],
  },
  {
    group: 'Driver app (iOS / Android)',
    rows: [
      { label: 'Route execution', values: [true, true, true, true] },
      { label: 'Works offline', values: [true, true, true, true] },
      { label: 'Vehicle walkaround checks', values: [false, true, true, true] },
    ],
  },
  {
    group: 'Proof of delivery',
    rows: [
      { label: 'Signature and photo', values: [true, true, true, true] },
      { label: 'Barcode / QR scanning', values: [true, true, true, true] },
      { label: 'Bulk POD', values: [false, true, true, true] },
    ],
  },
  {
    group: 'Live tracking',
    rows: [
      { label: 'Real-time map', values: [true, true, true, true] },
      { label: 'Branded customer tracking page', values: [false, true, true, true] },
    ],
  },
  {
    group: 'Route planning',
    rows: [
      { label: 'Route optimisation', values: [true, true, true, true] },
      { label: 'Recurring routes', values: [false, true, true, true] },
    ],
  },
  {
    group: 'Notifications',
    rows: [
      { label: 'Recipient status emails', values: [true, true, true, true] },
      { label: 'Branded, switchable per company', values: [false, true, true, true] },
      { label: 'Driver push with deep-link', values: [true, true, true, true] },
    ],
  },
  {
    group: 'Geofencing',
    rows: [{ label: 'Arrival / departure events', values: [false, false, true, true] }],
  },
  {
    group: 'Analytics and reports',
    rows: [
      { label: 'Delivery reports', values: [true, true, true, true] },
      { label: 'Report export and scheduling', values: [false, true, true, true] },
    ],
  },
  {
    group: 'Integrations and API',
    rows: [
      { label: 'REST API and webhooks', values: [false, false, true, true] },
      { label: 'Custom integrations', values: [false, false, false, true] },
    ],
  },
  {
    group: 'Support',
    rows: [
      { label: 'Help centre and email', values: [true, true, true, true] },
      { label: 'Priority support', values: [false, false, true, true] },
      { label: 'Dedicated onboarding', values: [false, false, false, true] },
    ],
  },
];

export const billingFaq = [
  {
    q: 'Can I cancel at any time?',
    a: 'Yes. Plans are contract-free. If you cancel, you keep access until the end of the paid period and are not billed again.',
  },
  {
    q: 'What happens when the free trial ends?',
    a: `The trial runs for ${TRIAL_DAYS} days with no card required. When it ends, you pick a plan to continue; your data stays in place.`,
  },
  {
    q: 'Which payment methods do you accept?',
    a: 'Card payments are supported. Additional methods for annual invoicing are being confirmed; talk to sales if you need a specific arrangement.',
  },
  {
    q: 'Do prices include VAT?',
    a: 'Prices are shown excluding VAT. Tax is applied at checkout according to your billing country.',
  },
  {
    q: 'Can I switch plans, or move between per-driver and per-order billing?',
    a: 'Yes. Upgrades apply immediately with prorated billing; downgrades and model switches apply at the next billing cycle.',
  },
  {
    q: 'Is there a discount for large fleets?',
    a: 'Fleets beyond the listed tiers are priced individually. Book a call with sales for a quote against your volume.',
  },
];
