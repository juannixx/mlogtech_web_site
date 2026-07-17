// ============================================================================
// PRICING DATA: 100% MOCK (SPEC-05).
// No value in this file is a commercial decision. Everything here exists so
// the /pricing/ page can be built and tested. Replace with real numbers when
// the commercial strategy lands, then flip MOCK_PRICING to false.
// While MOCK_PRICING is true the page shows a "mock" badge in dev builds and
// no Product/Offer JSON-LD is emitted (mock prices must never be indexed).
// ============================================================================

export const MOCK_PRICING = true;
export const CURRENCY = '£';
export const TRIAL_DAYS = 14; // [MOCK]
export const ANNUAL_DISCOUNT_LABEL = 'save ~17%'; // [MOCK]

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
      'Route planning and optimization',
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

export const orderPlans: OrderPlan[] = [
  { name: 'S', monthly: 199, orders: 1000, perOrder: '0.20', cta: 'trial' },
  { name: 'M', monthly: 349, orders: 2000, perOrder: '0.175', popular: true, cta: 'trial' },
  { name: 'L', monthly: 599, orders: 4000, perOrder: '0.15', cta: 'trial' },
  { name: 'XL', monthly: 999, orders: 8000, perOrder: '0.125', cta: 'sales' },
];

// Comparison matrix, grouped in the 12 categories mapped from the market
// (SPEC-05 section 4). Values are MOCK until the product catalog is confirmed.
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
    group: 'Organization',
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
      { label: 'Route optimization', values: [true, true, true, true] },
      { label: 'Recurring routes', values: [false, true, true, true] },
    ],
  },
  {
    group: 'Notifications',
    rows: [
      { label: 'Email notifications', values: [true, true, true, true] },
      { label: 'Push and SMS', values: [false, true, true, true] },
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
      { label: 'Help center and email', values: [true, true, true, true] },
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
