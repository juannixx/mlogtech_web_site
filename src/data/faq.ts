// General FAQ (/faq/), 20 questions in 4 groups (SPEC-02 §12).

export interface FaqGroup {
  group: string;
  items: { q: string; a: string }[];
}

export const faqGroups: FaqGroup[] = [
  {
    group: 'Product',
    items: [
      {
        q: 'What is MLogTech?',
        a: 'MLogTech is delivery management software: route planning and optimisation, a driver app with electronic proof of delivery, live tracking for you and your customers, and reporting, all working on one record per order.',
      },
      {
        q: 'Who is it for?',
        a: 'Operations that deliver with their own drivers or subcontracted fleets: couriers, wholesalers, retailers running their own delivery, 3PLs and field distribution. It works from one van to hundreds.',
      },
      {
        q: 'What is electronic proof of delivery (ePOD)?',
        a: 'The digital record that closes a delivery: signature, photo, barcode scan, time and location, captured in the driver app and attached to the order instantly.',
      },
      {
        q: 'Does MLogTech replace my telematics or my ERP?',
        a: 'Neither. It runs the delivery operation (orders, routes, drivers, proof). It can consume orders from your ERP and complements vehicle telematics rather than replacing it.',
      },
      {
        q: 'Do my customers need to install anything?',
        a: 'No. Customers receive notifications and a browser-based tracking page. Only drivers install the app.',
      },
    ],
  },
  {
    group: 'Getting started',
    items: [
      {
        q: 'How long does it take to get running?',
        a: 'A small fleet can import orders and dispatch its first optimised routes on day one. Larger rollouts usually phase by depot or team over a few weeks.',
      },
      {
        q: 'Do I need training for drivers?',
        a: 'The driver app is built to be learned in one shift: the route is a list, each stop is one screen, and proof capture is guided. Most teams onboard drivers with a 15-minute walkthrough.',
      },
      {
        q: 'Can I import my existing data?',
        a: 'Orders come in by spreadsheet or API. Vehicles, drivers and depots are set up once in the web panel.',
      },
      {
        q: 'Is there a free trial?',
        a: 'Yes, with no card required. You can run real routes during the trial and keep the data if you continue.',
      },
      {
        q: 'What happens to my data if I cancel?',
        a: 'You can export your records before the account closes. We do not hold operational data hostage.',
      },
    ],
  },
  {
    group: 'Technical',
    items: [
      {
        q: 'Which platforms does the driver app support?',
        a: 'iOS and Android, on ordinary consumer phones. Rugged Android devices also work.',
      },
      {
        q: 'Does it work offline?',
        a: 'Yes. Routes live on the device, proof capture works without signal and everything syncs automatically when coverage returns.',
      },
      {
        q: 'Is there an API?',
        a: 'Yes: REST API and webhooks for pushing orders in and getting statuses and PODs back. API access is available on the Advanced plan and above.',
      },
      {
        q: 'Which integrations exist?',
        a: 'Spreadsheet/CSV import and the API are available today; native connectors for e-commerce and ERP platforms are rolling out. Tell us which platform you ship from.',
      },
      {
        q: 'Where is my data hosted and is it secure?',
        a: 'Data is encrypted in transit and hosted with a major cloud provider. See the security page for current practices and our data protection commitments.',
      },
    ],
  },
  {
    group: 'Billing',
    items: [
      {
        q: 'How is MLogTech priced?',
        a: 'Per driver or per order volume, monthly or annual, in GBP. There is no driver minimum, so small operations pay for exactly what they run.',
      },
      {
        q: 'Is there a contract or lock-in?',
        a: 'No fixed-term contract. Cancel any time and keep access until the end of the paid period.',
      },
      {
        q: 'Can I switch between per-driver and per-order billing?',
        a: 'Yes. Switches apply at the next billing cycle; upgrades within a model apply immediately with prorated billing.',
      },
      {
        q: 'Do prices include VAT?',
        a: 'Prices are shown excluding VAT; tax is applied at checkout according to your billing country.',
      },
      {
        q: 'What does the free trial include?',
        a: 'The features of the Growth plan, on your own data, for the trial period. No card required to start.',
      },
    ],
  },
];
