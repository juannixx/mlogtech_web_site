// Full content for the 9 feature pages (SPEC-02 §3 template: shorter than
// solution pages). Template: src/pages/features/[slug].astro

export interface FeaturePage {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroPara: string;
  heroMock: 'dashboard' | 'phone';
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
        body: 'Scanning validates that the right parcel reached the right address before the stop can close.',
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
        title: 'Status-triggered sends',
        body: 'Dispatched, en route, next stop, delivered, failed: each status can trigger its own message.',
      },
      {
        title: 'Email and push',
        body: 'Messages go where your customer is, with delivery confirmations carrying the POD.',
      },
      {
        title: 'Your templates, your voice',
        body: 'Message content is configurable per status, in your brand’s tone.',
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
        body: 'The delivered notification can attach the electronic POD, closing the loop with the customer.',
        href: '/features/proof-of-delivery/',
        label: 'Electronic POD',
      },
    ],
    faq: [
      {
        q: 'Which channels are supported?',
        a: 'Email and push notifications today. Additional channels are on the roadmap; tell us which one your operation needs.',
      },
      {
        q: 'Can I control when messages are sent?',
        a: 'Yes. Each status transition has its own toggle and template, so you send exactly as much as your customers want.',
      },
      {
        q: 'Do notifications reduce failed deliveries?',
        a: 'Notified customers with a live ETA are far more likely to be available at the door, which is the single biggest lever on first-attempt success.',
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
        title: 'Amount at the stop',
        body: 'The app shows what to collect and records what was collected, with the proof.',
      },
      {
        title: 'Per-driver reconciliation',
        body: 'End of shift shows expected versus collected per driver, discrepancies first.',
      },
      {
        title: 'On the order record',
        body: 'Payments live on the same record as the delivery and the POD.',
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
        q: 'Can drivers accept partial payments?',
        a: 'The collected amount is recorded as entered, so partials and adjustments are visible in reconciliation instead of hidden.',
      },
      {
        q: 'How do I see what a driver owes?',
        a: 'The reconciliation view shows expected versus collected per driver per shift, with every order behind the numbers one click away.',
      },
      {
        q: 'Does it handle card or digital payments?',
        a: 'COD records the collection event regardless of method. Direct payment-terminal integrations are on the roadmap.',
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
    capabilities: [
      {
        title: 'Operational dashboards',
        body: 'Completion rates, failed-delivery reasons, time per stop and route efficiency, live.',
      },
      {
        title: 'Per customer and per driver',
        body: 'Slice the same data by what the question needs: a client review or a team huddle.',
      },
      {
        title: 'Export and schedule',
        body: 'CSV export for your BI, scheduled sends for the people who just need the summary.',
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
        a: 'Yes, CSV export is available on reports, and the API exposes the underlying records for your own BI stack.',
      },
      {
        q: 'Can reports be sent automatically?',
        a: 'Yes. Scheduled reports go out by email at the cadence you set, per recipient.',
      },
      {
        q: 'What metrics matter most for delivery?',
        a: 'First-attempt success rate, time per stop, stops per route and failed-delivery reasons are the four that move cost and service fastest. All are on the default dashboard.',
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
      'Shippers and 3PL clients create their own orders, watch their own deliveries and pull their own PODs. Your dispatchers dispatch.',
    heroMock: 'dashboard',
    capabilities: [
      {
        title: 'Self-service orders',
        body: 'Clients enter or upload their orders directly; dispatch sees them arrive on the board.',
      },
      {
        title: 'Their deliveries only',
        body: 'Each client sees their own orders, statuses and proofs, and nothing else.',
      },
      {
        title: 'POD self-service',
        body: 'Proof of delivery downloads without an email to your team.',
      },
    ],
    connects: [
      {
        title: 'Orders flow to planning',
        body: 'Portal orders join the same board and optimization as everything else.',
        href: '/solutions/route-planning/',
        label: 'Route planning',
      },
      {
        title: 'Built for courier work',
        body: 'Same-day clients book jobs through the portal and watch them run.',
        href: '/solutions/courier-dispatch/',
        label: 'Courier dispatch',
      },
    ],
    faq: [
      {
        q: 'Can I control what each client sees?',
        a: 'Yes. Access is scoped per client account: their orders, their statuses, their proofs.',
      },
      {
        q: 'Do portal orders need re-entry?',
        a: 'No. They land directly on the dispatch board, ready to be planned like any other order.',
      },
      {
        q: 'Is the portal branded?',
        a: 'The portal carries your brand, consistent with the tracking pages your customers already see.',
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
        title: 'Configurable layout',
        body: 'Fields, sizes and branding set to your operation and your printers.',
      },
      {
        title: 'Scannable by design',
        body: 'Every label carries the barcode or QR the driver app validates against.',
      },
      {
        title: 'Batch printing',
        body: 'Print the whole route’s labels in one go, in stop order.',
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
