// Full content for the 9 feature pages (SPEC-02 §3 template: shorter than
// solution pages). Template: src/pages/features/[slug].astro

export interface FeaturePage {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroPara: string;
  heroMock: 'dashboard' | 'phone';
  /** Optional real product screenshot for the hero, framed instead of the mock. */
  heroShot?: { src: string; alt: string; width: number; height: number };
  capabilities: { title: string; body: string }[];
  connects: { title: string; body: string; href: string; label: string }[];
  faq: { q: string; a: string }[];
}

export const featurePages: FeaturePage[] = [
  {
    slug: 'proof-of-delivery',
    metaTitle: 'Electronic proof of delivery (ePOD) | MLogTech',
    metaDescription:
      'Capture signature, photo and barcode at the door, stamped with time and location. Electronic proof of delivery that syncs instantly and works offline.',
    h1: 'Electronic proof of delivery.',
    heroPara:
      'Every drop closes with evidence: signature, photo, scan, time and location, attached to the order the moment it happens. Paper delivery slips stay in the past.',
    heroMock: 'phone',
    capabilities: [
      {
        title: 'Signature and photo',
        body: 'Captured on the driver’s screen at the door, with the receiver’s name and any notes.',
      },
      {
        title: 'Barcode against the order',
        body: 'A Code128 or QR scan is checked against the tracking number before the stop can close, so the right parcel reaches the right address.',
      },
      {
        title: 'Offline capture',
        body: 'No signal, no problem: proof is stored on the device and syncs automatically when coverage returns.',
      },
    ],
    connects: [
      {
        title: 'Lands on the order record',
        body: 'The POD attaches to the order that dispatch planned, so invoicing and disputes read one record.',
        href: '/solutions/tms/',
        label: 'The full transport cycle',
      },
      {
        title: 'Captured in the driver app',
        body: 'Proof capture is one touch inside the route flow, not a separate app.',
        href: '/solutions/driver-app/',
        label: 'The driver app',
      },
    ],
    faq: [
      {
        q: 'Is electronic proof of delivery legally valid?',
        a: 'Electronic signatures with identity, time and location metadata are widely accepted as delivery evidence in commercial disputes. They are consistently stronger evidence than a paper slip, which carries no timestamp and is easy to lose.',
      },
      {
        q: 'What if the customer is not there?',
        a: 'The driver records a non-delivery reason from a configurable list, with photo evidence if needed (safe place, neighbor, refused). The order record shows exactly what happened.',
      },
      {
        q: 'Can I send the POD to my customer?',
        a: 'Yes. Delivery confirmations with the proof attached can go out automatically by email as the stop completes.',
      },
    ],
  },
  {
    slug: 'live-tracking',
    metaTitle: 'Live tracking and ETA | Branded customer tracking | MLogTech',
    metaDescription:
      'See every vehicle live, share a branded tracking page with customers and keep ETAs updated from the road.',
    h1: 'Live tracking with ETAs that hold.',
    heroPara:
      'Dispatch sees every vehicle on one map. Customers see their own delivery on a page with your brand. Both stop calling to ask where the van is.',
    heroMock: 'dashboard',
    capabilities: [
      {
        title: 'Fleet map, live',
        body: 'Positions, route progress and exceptions across the whole operation, updating in real time.',
      },
      {
        title: 'Branded tracking page',
        body: 'Each order gets a link with your logo and colors showing position, ETA and status.',
      },
      {
        title: 'ETAs recalculated on the road',
        body: 'Estimates update as the route actually runs, not as it was planned at 7am.',
      },
    ],
    connects: [
      {
        title: 'Feeds the notifications',
        body: 'Status changes trigger automatic customer updates by email and push.',
        href: '/features/notifications/',
        label: 'Delivery notifications',
      },
      {
        title: 'Watches the plan execute',
        body: 'Tracking is the live half of route planning: deviations surface while there is still time to react.',
        href: '/solutions/route-planning/',
        label: 'Route planning',
      },
    ],
    faq: [
      {
        q: 'Does tracking need extra hardware?',
        a: 'No. Position comes from the driver app on an ordinary phone. Dedicated vehicle trackers can complement it but are not required.',
      },
      {
        q: 'Can customers see the driver’s exact position?',
        a: 'The tracking page shows what you choose: live position and ETA, or status milestones only. It is your call per operation.',
      },
      {
        q: 'How accurate are the ETAs?',
        a: 'ETAs are recalculated continuously from the vehicle’s actual position and remaining stops, so they tighten as the delivery approaches.',
      },
    ],
  },
  {
    slug: 'notifications',
    metaTitle: 'Delivery notifications | Email and push updates | MLogTech',
    metaDescription:
      'Automatic delivery notifications at dispatch, en route and delivered, with a live tracking link. Fewer status calls, fewer missed deliveries.',
    h1: 'Notifications that empty the phone line.',
    heroPara:
      'Customers are told when the order ships, when the van is near and when the parcel lands, automatically, with a tracking link in every message.',
    heroMock: 'dashboard',
    capabilities: [
      {
        title: 'Recipient emails, by status',
        body: 'Out-for-delivery, delivered and failed each send a branded email to the recipient, with a per-company on/off switch.',
      },
      {
        title: 'A tracking link in every message',
        body: 'Each email carries the branded public tracking page, so the recipient can follow the delivery themselves.',
      },
      {
        title: 'Driver push with deep-link',
        body: 'The driver’s own push notifications open the exact document or screen they point to, not a generic inbox.',
      },
    ],
    connects: [
      {
        title: 'Driven by live tracking',
        body: 'Notifications fire from what actually happens on the road, not from the morning plan.',
        href: '/features/live-tracking/',
        label: 'Live tracking',
      },
      {
        title: 'Closes with proof',
        body: 'The delivered email can carry the electronic POD, closing the loop with the customer.',
        href: '/features/proof-of-delivery/',
        label: 'Electronic POD',
      },
    ],
    faq: [
      {
        q: 'Which channels are supported?',
        a: 'Recipients are updated by branded email today (out-for-delivery, delivered and failed), each switchable per company. Drivers get in-app push. More recipient channels are on the roadmap; tell us which one your operation needs.',
      },
      {
        q: 'Can I control when messages are sent?',
        a: 'Yes. Each status has its own switch and template per company, so you send exactly as much as your customers want.',
      },
      {
        q: 'Do notifications reduce failed deliveries?',
        a: 'A recipient who gets an out-for-delivery email with a live tracking link is far more likely to be there, which is the single biggest lever on first-attempt success.',
      },
    ],
  },
  {
    slug: 'barcode-scanner',
    metaTitle: 'QR and barcode scanner | Right parcel, right door | MLogTech',
    metaDescription:
      'Scan parcels at loading and at the door with the driver app camera. Kill wrong-parcel deliveries without dedicated hardware.',
    h1: 'Scanning that kills wrong-parcel deliveries.',
    heroPara:
      'The camera on the driver’s phone is the scanner. Parcels are validated against the order at loading and again at the door, so the wrong box never gets signed for.',
    heroMock: 'phone',
    capabilities: [
      {
        title: 'Load verification',
        body: 'A scan at the depot confirms every parcel for the route is actually on the van.',
      },
      {
        title: 'Door verification',
        body: 'A scan at the stop matches the parcel to the order before proof capture opens.',
      },
      {
        title: 'QR and 1D barcodes',
        body: 'Standard label formats work out of the box, with quantities for multi-parcel orders.',
      },
    ],
    connects: [
      {
        title: 'Gate for proof capture',
        body: 'Scanning is step one of the POD flow, so evidence starts with the right parcel.',
        href: '/features/proof-of-delivery/',
        label: 'Electronic POD',
      },
      {
        title: 'Prints from the same system',
        body: 'Labels generated with the route carry the codes the scanner expects.',
        href: '/features/shipping-labels/',
        label: 'Shipping labels',
      },
    ],
    faq: [
      {
        q: 'Do I need dedicated scanners?',
        a: 'No. The driver app uses the phone camera. Rugged devices with hardware scanners also work if you already have them.',
      },
      {
        q: 'What label formats are supported?',
        a: 'Common 1D barcodes and QR codes. If your labels come from another system, the existing codes can be used as-is.',
      },
      {
        q: 'Does scanning work offline?',
        a: 'Yes. Validation runs against the route data already on the device.',
      },
    ],
  },
  {
    slug: 'cash-on-delivery',
    metaTitle: 'Cash on delivery (COD) | Collected and reconciled | MLogTech',
    metaDescription:
      'Record cash on delivery payments at the door and reconcile them against orders and drivers automatically.',
    h1: 'Cash on delivery without the shoebox.',
    heroPara:
      'COD amounts are captured at the stop, tied to the order and reconciled per driver at end of shift. No envelopes, no memory, no end-of-week surprises.',
    heroMock: 'phone',
    capabilities: [
      {
        title: 'Expected amount at the stop',
        body: 'The app shows what to collect and records the amount and the payment method used.',
      },
      {
        title: 'A note when it differs',
        body: 'If the collected value does not match what was expected, the driver records why, on the spot.',
      },
      {
        title: 'On the order record',
        body: 'The COD amount, method and note sit on the same record as the delivery and the POD.',
      },
    ],
    connects: [
      {
        title: 'Part of the proof flow',
        body: 'Collection is a step in the stop completion, right next to signature and photo.',
        href: '/features/proof-of-delivery/',
        label: 'Electronic POD',
      },
      {
        title: 'Reported with everything else',
        body: 'COD totals appear in the same reports as delivery performance.',
        href: '/features/reports/',
        label: 'Analytics and reports',
      },
    ],
    faq: [
      {
        q: 'What if the collected amount differs?',
        a: 'The driver records the actual amount and a note explaining the difference, so a short payment is visible on the order instead of hidden.',
      },
      {
        q: 'How do I total what was collected?',
        a: 'Every COD event carries amount, method and note on its order, so collections total up per driver, route or day from the same records.',
      },
      {
        q: 'Does it handle card or digital payments?',
        a: 'COD records the collection event and the method used. Direct payment-terminal integrations are on the roadmap.',
      },
    ],
  },
  {
    slug: 'reports',
    metaTitle: 'Delivery analytics and reports | MLogTech',
    metaDescription:
      'Delivery performance per driver, route and customer. Exportable, schedulable reports built from the operation’s real records.',
    h1: 'Reports built from what actually happened.',
    heroPara:
      'Every stop, proof and exception is already a record. Reports turn them into answers: performance per driver, cost per route, service per customer.',
    heroMock: 'dashboard',
    heroShot: {
      src: '/images/product/panel-quality.jpg',
      alt: 'MLogTech quality overview: overall score, safety and compliance, delivery completion rate and performance over time',
      width: 1500,
      height: 724,
    },
    capabilities: [
      {
        title: 'Operational dashboards',
        body: 'Completion rates, failed-delivery reasons and route performance, read straight from what happened.',
      },
      {
        title: 'Delivery ratings and quality',
        body: 'Recipients rate deliveries one to five; a quality overview aggregates ratings and performance across drivers and routes.',
      },
      {
        title: 'Export to your stack',
        body: 'Export the underlying records to CSV for your own BI, or read them through the API.',
      },
    ],
    connects: [
      {
        title: 'Fed by every delivery',
        body: 'The data comes from route execution and PODs, not from manual reporting.',
        href: '/solutions/tms/',
        label: 'The transport cycle',
      },
      {
        title: 'Shareable with clients',
        body: '3PL clients can see their own numbers through the customer portal.',
        href: '/features/customer-portal/',
        label: 'Customer portal',
      },
    ],
    faq: [
      {
        q: 'Can I export the raw data?',
        a: 'Yes. Export the underlying records to CSV, or read them through the REST API for your own BI stack.',
      },
      {
        q: 'Where do the ratings come from?',
        a: 'Recipients leave a one-to-five rating after delivery. Those roll up into the quality overview alongside completion and performance, so you see service quality by driver and route.',
      },
      {
        q: 'What metrics matter most for delivery?',
        a: 'First-attempt success, failed-delivery reasons, completion rate and delivery ratings are the ones that move cost and service fastest, and they sit on the default dashboards.',
      },
    ],
  },
  {
    slug: 'customer-portal',
    metaTitle: 'Customer portal for shippers and 3PL clients | MLogTech',
    metaDescription:
      'Let shippers and 3PL clients create orders and follow their own deliveries in a portal, instead of emailing your dispatchers.',
    h1: 'A portal that answers your clients’ emails for you.',
    heroPara:
      'Give verified shippers and 3PL clients their own login to follow their deliveries and pull their own proof, instead of emailing your dispatchers for updates.',
    heroMock: 'dashboard',
    capabilities: [
      {
        title: 'Scoped web access',
        body: 'Verified customers get their own login to the dashboard, seeing only what belongs to them.',
      },
      {
        title: 'Their deliveries only',
        body: 'Each client sees their own orders, statuses and proofs, and nothing from anyone else.',
      },
      {
        title: 'POD self-service',
        body: 'Clients download proof of delivery for their own orders without an email to your team.',
      },
    ],
    connects: [
      {
        title: 'One record, both sides',
        body: 'Clients read the same order record your dispatchers work from, so nobody reconciles two views.',
        href: '/solutions/tms/',
        label: 'The transport cycle',
      },
      {
        title: 'Orders in by import or API',
        body: 'Bring client orders in by spreadsheet or the import API; they land on the same board.',
        href: '/integrations/',
        label: 'Integrations',
      },
    ],
    faq: [
      {
        q: 'Can I control what each client sees?',
        a: 'Yes. Access is scoped per client account: their orders, their statuses, their proofs, and nothing else.',
      },
      {
        q: 'How do a client’s orders get in?',
        a: 'Orders are brought in by spreadsheet import or the import API and land on the dispatch board; the client then follows them in the portal.',
      },
      {
        q: 'Is the portal branded?',
        a: 'It carries your brand, consistent with the public tracking pages your customers already see.',
      },
    ],
  },
  {
    slug: 'shipping-labels',
    metaTitle: 'Shipping labels | Generated with the route | MLogTech',
    metaDescription:
      'Configurable shipping labels generated with the route, carrying the barcodes the driver app scans. Print and go.',
    h1: 'Labels that match the route.',
    heroPara:
      'Labels are generated from the same orders the route was planned from, carrying the codes the scanner expects. Print at the depot and load.',
    heroMock: 'dashboard',
    capabilities: [
      {
        title: '4×6 or A4, Code128',
        body: 'Labels print at 4×6 or A4 with a Code128 barcode the driver app scans against the order.',
      },
      {
        title: 'Delivery note per route',
        body: 'A delivery note (BOL) generates with the route, alongside the labels.',
      },
      {
        title: 'Documents for signature',
        body: 'Upload a document, place signature fields on it and collect signatures at the door.',
      },
    ],
    connects: [
      {
        title: 'Scanned at load and door',
        body: 'The label is the other half of the scanning flow.',
        href: '/features/barcode-scanner/',
        label: 'QR and barcode scanner',
      },
      {
        title: 'Generated from orders',
        body: 'No re-keying: labels come from the same order data as the route.',
        href: '/solutions/tms/',
        label: 'The transport cycle',
      },
    ],
    faq: [
      {
        q: 'Which printers work?',
        a: 'Standard label and laser printers. Layouts are configurable to common label sizes.',
      },
      {
        q: 'Can I include my own fields?',
        a: 'Yes. Custom order fields can be placed on the label layout.',
      },
      {
        q: 'What if my parcels already have labels?',
        a: 'Existing barcodes can be used for scanning; generating labels is optional.',
      },
    ],
  },
  {
    slug: 'geofencing',
    metaTitle: 'Geofencing | Automatic arrival and departure logs | MLogTech',
    metaDescription:
      'Arrival and departure at every stop logged automatically by geofence. Accurate service times without asking drivers to click.',
    h1: 'Arrivals and departures, logged automatically.',
    heroPara:
      'A geofence around every stop records when the vehicle arrives and leaves. Service times become real data instead of driver memory.',
    heroMock: 'dashboard',
    capabilities: [
      {
        title: 'Automatic timestamps',
        body: 'Arrival and departure events fire from position, with no driver interaction.',
      },
      {
        title: 'True service times',
        body: 'Time-at-stop and time-driving separate cleanly, per stop and per route.',
      },
      {
        title: 'Site-level rules',
        body: 'Depots and large sites get their own fences for yard-time visibility.',
      },
    ],
    connects: [
      {
        title: 'Sharpens the ETAs',
        body: 'Real service times feed back into tracking estimates and future plans.',
        href: '/features/live-tracking/',
        label: 'Live tracking',
      },
      {
        title: 'Improves the next plan',
        body: 'Planning learns from measured stop durations instead of guesses.',
        href: '/solutions/route-planning/',
        label: 'Route planning',
      },
    ],
    faq: [
      {
        q: 'Does geofencing drain the driver’s battery?',
        a: 'The app uses the same location stream as tracking; geofence evaluation adds no meaningful battery cost.',
      },
      {
        q: 'How large are the geofences?',
        a: 'Radius is configurable per stop type, so a house and a distribution center each get a sensible fence.',
      },
      {
        q: 'What can trigger from a geofence event?',
        a: 'Arrival and departure timestamps on the stop, plus customer notifications such as "your delivery is arriving".',
      },
    ],
  },
];
