// Full content for the 6 solution pages (SPEC-02 §2 template).
// One entry per page; the template lives in src/pages/solutions/[slug].astro.

export interface Split {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  linkHref: string;
  linkLabel: string;
}

export interface SolutionPage {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSub: string;
  heroMock: 'dashboard' | 'phone';
  benefits: { title: string; body: string }[];
  stepsTitle: string;
  steps: { title: string; body: string }[];
  splits: Split[];
  eduTitle: string;
  eduParagraphs: string[];
  ctaTitle: string;
  ctaNote: string;
  faq: { q: string; a: string }[];
}

export const solutionPages: SolutionPage[] = [
  {
    slug: 'route-planning',
    metaTitle: 'Route planning software | Optimized multi-stop routes | MLogTech',
    metaDescription:
      'Plan and optimize multi-stop delivery routes against vehicles, shifts and time windows. Dispatch straight to a driver app with electronic proof of delivery.',
    h1: 'Route planning software for delivery fleets.',
    heroSub:
      "Turn the day's orders into optimized routes in minutes, matched to your vehicles, shifts and time windows, and dispatched straight to the driver app.",
    heroMock: 'dashboard',
    benefits: [
      {
        title: 'Hours of planning down to minutes',
        body: 'The day’s orders become optimized routes in one run, instead of a morning in spreadsheets.',
      },
      {
        title: 'More drops per vehicle',
        body: 'Stops are sequenced against time windows and capacity, so vans finish routes instead of crossing town twice.',
      },
      {
        title: 'Less fuel per route',
        body: 'Shorter distances per stop cut fuel spend and vehicle wear without touching service levels.',
      },
      {
        title: 'No re-planning chaos',
        body: 'A cancellation or a priority order re-slots into the route by drag and drop, and the driver sees it live.',
      },
    ],
    stepsTitle: 'How route planning works in MLogTech.',
    steps: [
      {
        title: 'Import the orders',
        body: 'Spreadsheet upload or API. Addresses are validated and geocoded on entry.',
      },
      {
        title: 'Set your constraints',
        body: 'Vehicles, capacities, shifts, time windows and depot. Set once, reuse daily.',
      },
      {
        title: 'Optimize and adjust',
        body: 'Routes come out sequenced. Drag stops between routes if reality disagrees.',
      },
      {
        title: 'Dispatch to the app',
        body: 'Drivers receive the final route with navigation and order details.',
      },
    ],
    splits: [
      {
        title: 'Optimization that respects your constraints.',
        body: 'Capacity by weight or volume, driver shifts, customer windows, multiple depots. The optimizer plans inside your rules, not around them.',
        image: '/images/warehouse-truck.jpg',
        imageAlt: 'A box truck at a warehouse loading bay with pallets ready for dispatch',
        linkHref: '/features/',
        linkLabel: 'See all planning features',
      },
      {
        title: 'The plan survives contact with the road.',
        body: "Live tracking shows the route as it actually runs. Reassign a stop, and the driver app updates before the next turn. Every completed drop returns a POD against the order.",
        image: '/images/driver-tablet.jpg',
        imageAlt: 'A fleet operator in front of trucks reviewing routes on a rugged tablet',
        linkHref: '/features/live-tracking/',
        linkLabel: 'More on live tracking',
      },
    ],
    eduTitle: 'What is route planning and what does it change?',
    eduParagraphs: [
      'Route planning is the process of deciding which vehicle delivers which orders and in what sequence. Done by hand, it is a daily puzzle solved in spreadsheets and local knowledge: someone groups orders by postcode, guesses drive times and hopes the vans finish before the shift ends.',
      "Route planning software replaces the guessing with optimization. It takes the full list of orders, the fleet's real constraints (vehicle capacity, driver shifts, delivery time windows, depot locations) and computes routes that minimize distance and time while keeping every promise the business made to the customer.",
      'The difference shows up in three places. Planning time collapses from hours to minutes, because the sequencing is computed instead of assembled by hand. Cost per delivery falls, because the same fleet completes more drops with less driving. And service improves, because arrival windows are planned rather than hoped for, and the dispatcher can see deviations while there is still time to react.',
      'In MLogTech, planning is the first third of a longer loop: the plan dispatches to the driver app, execution reports back through live tracking, and every completed stop returns an electronic proof of delivery attached to the original order. The route is one record from spreadsheet to signature.',
    ],
    ctaTitle: "Plan tomorrow's routes with MLogTech.",
    ctaNote: 'Free trial with the optimizer included. No driver minimum.',
    faq: [
      {
        q: 'What is route planning software?',
        a: 'Route planning software takes a list of deliveries and turns it into ordered routes for each vehicle, deciding which driver visits which stop and in what sequence. Good planners respect real constraints: vehicle capacity, driver shifts, customer time windows and depot location.',
      },
      {
        q: 'Can Google Maps do route planning?',
        a: 'Google Maps navigates between points but does not plan multi-stop routes across a fleet. It has no concept of vehicle capacity, time windows, driver shifts or proof of delivery. It works for a handful of stops with one vehicle; it stops working at fleet scale.',
      },
      {
        q: 'How much does route planning software cost?',
        a: 'Pricing is usually per driver or per order volume. MLogTech starts with a free trial and has no driver minimum, so a one-van operation pays for one driver. See the pricing page for current plans.',
      },
      {
        q: 'How many stops can one route have?',
        a: 'The optimizer handles routes of hundreds of stops per vehicle. The practical limit is your service time per stop and shift length, which the planner respects when sequencing.',
      },
      {
        q: 'Does it work with time windows?',
        a: 'Yes. Each order can carry a delivery window, and the optimizer sequences stops so drivers arrive inside it. Orders that cannot fit are flagged before dispatch, not discovered on the road.',
      },
      {
        q: 'Can drivers change the route on the road?',
        a: 'Drivers execute the route in the app, and dispatchers keep control: re-sequencing and reassignments are done on the board and sync to the driver instantly, online or offline.',
      },
    ],
  },

  {
    slug: 'last-mile-delivery',
    metaTitle: 'Last mile delivery software | Visibility to the door | MLogTech',
    metaDescription:
      'Run the final leg of delivery with live tracking, customer notifications and electronic proof at the door. Last mile software for fleets of any size.',
    h1: 'Last mile delivery software.',
    heroSub:
      'The final leg is where promises are kept or broken. MLogTech gives you live visibility of every van, notified customers and proof at the door.',
    heroMock: 'dashboard',
    benefits: [
      {
        title: 'Fewer failed deliveries',
        body: 'Notified customers are home. ETAs and status updates cut the misses that force a second trip.',
      },
      {
        title: 'Less time per drop',
        body: 'Sequenced stops, navigation in the app and one-touch completion keep the driver moving.',
      },
      {
        title: 'Fewer status calls',
        body: 'The tracking page answers "where is my order?" before the phone rings.',
      },
      {
        title: 'Disputes settled in seconds',
        body: 'Signature, photo, timestamp and location on every drop. The evidence is attached to the order.',
      },
    ],
    stepsTitle: 'The last mile, step by step.',
    steps: [
      {
        title: 'Orders become routes',
        body: 'Import the day’s deliveries and optimize them across the fleet.',
      },
      {
        title: 'Customers get notified',
        body: 'Dispatch triggers the first notification with a live tracking link.',
      },
      {
        title: 'Drivers deliver with the app',
        body: 'Navigation, order details and proof capture at every door.',
      },
      {
        title: 'You watch it all live',
        body: 'Every vehicle, stop and exception on one map, as it happens.',
      },
    ],
    splits: [
      {
        title: 'Your brand at the customer’s door.',
        body: 'The tracking page carries your logo and colors, not ours. Notifications go out in your name at dispatch, en route and delivered.',
        image: '/images/highway-sunset.jpg',
        imageAlt: 'A delivery truck on a motorway at sunset',
        linkHref: '/features/notifications/',
        linkLabel: 'More on notifications',
      },
      {
        title: 'Exceptions surface while the van is still out.',
        body: 'A failed drop, a refused parcel or a long stop shows up on the board immediately, with the reason logged by the driver. You reroute today, not tomorrow.',
        image: '/images/fleet-row.jpg',
        imageAlt: 'A row of white delivery vans with shallow depth of field',
        linkHref: '/features/live-tracking/',
        linkLabel: 'More on live tracking',
      },
    ],
    eduTitle: 'What is last mile delivery and why is it hard?',
    eduParagraphs: [
      'Last mile delivery is the final movement of an order: from the depot or store to the customer’s address. It is the shortest leg of the journey and usually the most expensive one, because it is the only leg where every parcel needs its own stop, its own door and its own few minutes of a driver’s day.',
      'It is also the only leg the customer sees. A supply chain can run perfectly for a thousand miles and still fail in the last one: a missed window, a parcel left in the wrong place, a driver who cannot find the entrance. That failure is what gets remembered and reviewed.',
      'Last mile software attacks the cost and the experience at the same time. Optimized routes reduce miles and time per drop. Live tracking and notifications remove the uncertainty that causes missed deliveries and support calls. Electronic proof of delivery closes every stop with evidence, so disputes are resolved by looking at a record instead of arguing about memory.',
      'MLogTech covers the loop end to end: plan, notify, deliver, prove. One system, one record per order.',
    ],
    ctaTitle: 'Fix the mile that customers remember.',
    ctaNote: 'Free trial, no driver minimum. See it against your own routes.',
    faq: [
      {
        q: 'What is last mile delivery software?',
        a: 'It is the software that manages the final leg of delivery: planning routes, guiding drivers, notifying customers and capturing proof at the door. It replaces the spreadsheet-plus-phone-calls setup most operations start with.',
      },
      {
        q: 'Why is the last mile so expensive?',
        a: 'Because it does not scale like the rest of the chain. Long-haul moves thousands of parcels per trip; the last mile moves one parcel per stop. Every inefficiency (wrong sequence, failed delivery, second attempt) multiplies across every order.',
      },
      {
        q: 'How does it reduce failed deliveries?',
        a: 'Notified customers with live ETAs are far more likely to be available, and drivers arrive inside planned windows. When a delivery does fail, the reason is logged on the spot and the reattempt is planned deliberately instead of by improvisation.',
      },
      {
        q: 'Does it work for small fleets?',
        a: 'Yes. MLogTech has no driver minimum, so a two-van operation runs the same planning, tracking and proof flow as a national fleet.',
      },
      {
        q: 'Can my customers track their own deliveries?',
        a: 'Yes. Every order gets a branded live tracking page with position, ETA and status, plus automatic notifications by email or push.',
      },
    ],
  },

  {
    slug: 'driver-app',
    metaTitle: 'Delivery driver app | Routes, ePOD and offline mode | MLogTech',
    metaDescription:
      'An iOS and Android app that gives drivers their route, navigation, order details and electronic proof of delivery capture, online or offline.',
    h1: 'A delivery driver app that stays out of the way.',
    heroSub:
      'Routes, navigation, order details and proof capture in one app. Built for gloves, low signal and a hundred stops a day.',
    heroMock: 'phone',
    benefits: [
      {
        title: 'One app for the whole shift',
        body: 'Route, navigation, customer notes, proof capture and vehicle checks. No app-switching at the door.',
      },
      {
        title: 'Works offline',
        body: 'No signal at the loading bay or in the basement car park. The app keeps working and syncs when coverage returns.',
      },
      {
        title: 'Faster at every stop',
        body: 'One-touch completion, barcode scan against the order and signature on the screen. Seconds per drop, not minutes.',
      },
      {
        title: 'Less radio traffic',
        body: 'Dispatch sees progress live, so nobody calls the driver to ask where they are.',
      },
    ],
    stepsTitle: 'A driver’s day in the app.',
    steps: [
      {
        title: 'Start of shift',
        body: 'Walkaround vehicle check in the app; defects go straight to the workshop queue.',
      },
      {
        title: 'Route arrives',
        body: 'Stops in sequence with navigation, parcel details and customer notes.',
      },
      {
        title: 'At the door',
        body: 'Scan, capture signature or photo, log payment if COD. One touch completes the stop.',
      },
      {
        title: 'End of shift',
        body: 'Everything is already synced. No paperwork to hand in.',
      },
    ],
    splits: [
      {
        title: 'Proof capture built for the doorstep.',
        body: 'Signature, photo, barcode and non-delivery reasons, stamped with time and location. The POD is in the office system before the driver is back in the van.',
        image: '/images/driver-tablet.jpg',
        imageAlt: 'A driver in front of trucks using a rugged tablet',
        linkHref: '/features/proof-of-delivery/',
        linkLabel: 'More on electronic POD',
      },
      {
        title: 'Two-way with dispatch, without phone calls.',
        body: 'Route changes land on the device instantly. Drivers flag exceptions with a reason code instead of a call. Everyone stays on the road.',
        image: '/images/highway-sunset.jpg',
        imageAlt: 'A truck driving on a motorway at sunset',
        linkHref: '/features/live-tracking/',
        linkLabel: 'How dispatch sees it',
      },
    ],
    eduTitle: 'What makes a good delivery driver app?',
    eduParagraphs: [
      'A driver app is used standing up, in the rain, with one hand, a hundred times a day. The bar is not "feature-rich"; it is "never in the way". Every extra tap at the door is multiplied by every stop on every route.',
      'The essentials are a clear stop list in the right order, navigation that launches in one tap, order details that answer questions before the driver has to call anyone, and proof capture (signature, photo, scan) that takes seconds.',
      'The invisible essential is offline mode. Depots, basements and rural roads all drop signal, and the app must keep working: capture the proof, queue the sync, recover silently. An app that blocks on connectivity fails exactly when the job is hardest.',
      'The MLogTech driver app does the essentials and adds the shift around them: vehicle walkaround checks at the start, cash on delivery when it applies, and feedback capture when you want it. Everything syncs to the same record the office sees.',
    ],
    ctaTitle: 'Put the route in your drivers’ pockets.',
    ctaNote: 'iOS and Android. Included in every plan, offline mode and all.',
    faq: [
      {
        q: 'Does the app work without signal?',
        a: 'Yes. Routes are loaded to the device, proof capture works offline, and everything syncs automatically when coverage returns.',
      },
      {
        q: 'Which phones does it support?',
        a: 'iOS and Android, on ordinary consumer devices. No dedicated hardware is required, though it also runs on rugged Android devices.',
      },
      {
        q: 'How do drivers get their routes?',
        a: 'Dispatch publishes the route from the web panel and it appears in the app instantly, with stops in sequence, navigation and order details.',
      },
      {
        q: 'Can drivers capture payments?',
        a: 'Yes. Cash on delivery amounts are recorded at the stop and reconciled against orders in the web panel.',
      },
      {
        q: 'What about vehicle checks?',
        a: 'The app includes digital walkaround checks at the start of shift. Defects are logged with photos and flow into the defect queue for the workshop.',
      },
    ],
  },

  {
    slug: 'tms',
    metaTitle: 'Transport management system (TMS) | Plan, dispatch, prove | MLogTech',
    metaDescription:
      'A TMS for delivery operations: orders, routes, drivers, live tracking, proof of delivery and reporting in one system, with API access.',
    h1: 'A transport management system that ends at proof, not at dispatch.',
    heroSub:
      'Orders in, optimized routes out, live execution in the middle, and a POD against every order at the end. That is the whole transport cycle in one system.',
    heroMock: 'dashboard',
    benefits: [
      {
        title: 'One record per order',
        body: 'From import to signature, every event lands on the same order record. No reconciling three tools.',
      },
      {
        title: 'The fleet, one screen',
        body: 'Vehicles, drivers, routes and exceptions on one board, live.',
      },
      {
        title: 'Costs land where they belong',
        body: 'Deliveries, reattempts and failures are reported per route, driver and customer.',
      },
      {
        title: 'Fits the systems you have',
        body: 'CSV and spreadsheet import today, REST API and webhooks when you are ready to connect the ERP.',
      },
    ],
    stepsTitle: 'The transport cycle in MLogTech.',
    steps: [
      {
        title: 'Receive orders',
        body: 'Spreadsheet, portal entry or API from your ERP and e-commerce.',
      },
      {
        title: 'Plan and dispatch',
        body: 'Optimize across the fleet and publish routes to the driver app.',
      },
      {
        title: 'Execute with visibility',
        body: 'Live tracking, notifications and exception handling while vehicles are out.',
      },
      {
        title: 'Prove and report',
        body: 'ePOD closes every order; analytics report the operation per route, driver and customer.',
      },
    ],
    splits: [
      {
        title: 'Built for operations, not just orders.',
        body: 'Multiple depots, driver shifts, vehicle capacities and recurring routes. The operational reality of a transport business is first-class data here, not a workaround.',
        image: '/images/truck-loaded.jpg',
        imageAlt: 'An open trailer loaded with wrapped pallets ready for dispatch',
        linkHref: '/features/',
        linkLabel: 'See the full feature list',
      },
      {
        title: 'Reports your customers can receive.',
        body: 'Delivery performance per customer, exportable and schedulable. 3PL clients can watch their own orders through the customer portal instead of emailing you for updates.',
        image: '/images/warehouse-truck.jpg',
        imageAlt: 'A box truck at a warehouse loading bay',
        linkHref: '/features/customer-portal/',
        linkLabel: 'More on the customer portal',
      },
    ],
    eduTitle: 'What is a TMS and when do you need one?',
    eduParagraphs: [
      'A transport management system coordinates the movement of goods: which orders go on which vehicles, in what sequence, driven by whom, and what happened to each of them. It is the operational memory of a transport business.',
      'Most operations start without one. Orders live in an inbox, planning lives in a spreadsheet, execution lives in phone calls, and proof lives on paper in the cab. That setup works until volume, staff turnover or a big customer audit exposes how much of the operation exists only in someone’s head.',
      'The sign you need a TMS is not company size; it is reconciliation work. If someone spends part of every day matching what was planned against what happened, chasing PODs, or rebuilding yesterday from messages, the operation is already paying for a TMS without having one.',
      'MLogTech is a TMS scoped to delivery operations: it deliberately ends every cycle with electronic proof of delivery, because an order without proof is not finished; it is just quiet.',
    ],
    ctaTitle: 'Run transport as one system.',
    ctaNote: 'Free trial. Import a real day of orders and see the cycle close.',
    faq: [
      {
        q: 'What does TMS stand for?',
        a: 'Transport management system: the software that plans, executes and accounts for the movement of goods across a fleet.',
      },
      {
        q: 'How is MLogTech different from a generic TMS?',
        a: 'It is built for delivery operations and closes every order with electronic proof of delivery. Planning, driver app, tracking and POD are one product, not modules from different vendors.',
      },
      {
        q: 'Does it integrate with my ERP?',
        a: 'Orders can arrive by spreadsheet import or through the REST API and webhooks. Native connectors are rolling out; talk to us about your platform.',
      },
      {
        q: 'How much does a TMS cost?',
        a: 'MLogTech is priced per driver or per order volume, with a free trial and no driver minimum. See the pricing page for plans.',
      },
      {
        q: 'Can it handle multiple depots?',
        a: 'Yes. Depots, vehicles, shifts and capacities are all part of the planning model.',
      },
    ],
  },

  {
    slug: 'courier-dispatch',
    metaTitle: 'Courier dispatch software | Assign, track, invoice | MLogTech',
    metaDescription:
      'Dispatch software for courier operations: assign jobs in seconds, track every rider and driver live, and close jobs with electronic proof of delivery.',
    h1: 'Courier dispatch software for same-day speed.',
    heroSub:
      'Jobs come in all day; your board keeps up. Assign in seconds, watch execution live, and close every job with proof.',
    heroMock: 'dashboard',
    benefits: [
      {
        title: 'Assign in seconds',
        body: 'New job in, right courier out. The board shows who is where and who has capacity.',
      },
      {
        title: 'Same-day without chaos',
        body: 'Ad-hoc jobs slot into existing routes without breaking the plan for the rest of the day.',
      },
      {
        title: 'Every job accounted for',
        body: 'Pickup and drop both logged with time, location and proof. Nothing ends the day unexplained.',
      },
      {
        title: 'Billing-ready records',
        body: 'Completed jobs carry everything invoicing needs: times, distances, proof and COD amounts.',
      },
    ],
    stepsTitle: 'From phone call to proof.',
    steps: [
      {
        title: 'Job comes in',
        body: 'Entered on the board, through the customer portal or by API.',
      },
      {
        title: 'Dispatcher assigns',
        body: 'To the best-placed courier, into an existing route or as a direct run.',
      },
      {
        title: 'Courier executes',
        body: 'Pickup scan, navigation, drop with signature or photo.',
      },
      {
        title: 'Job closes itself',
        body: 'Proof, times and costs land on the job record, ready for invoicing.',
      },
    ],
    splits: [
      {
        title: 'The board is the operation.',
        body: 'Live positions, job status and exceptions on one screen. When a customer calls, the answer is already in front of you.',
        image: '/images/highway-sunset.jpg',
        imageAlt: 'A courier vehicle on a motorway at sunset',
        linkHref: '/features/live-tracking/',
        linkLabel: 'More on live tracking',
      },
      {
        title: 'Let clients book and watch their own jobs.',
        body: 'The customer portal takes bookings and shows clients their own job status, cutting the phone traffic that eats a dispatcher’s day.',
        image: '/images/fleet-row.jpg',
        imageAlt: 'A row of white delivery vans with shallow depth of field',
        linkHref: '/features/customer-portal/',
        linkLabel: 'More on the customer portal',
      },
    ],
    eduTitle: 'What is courier dispatch software?',
    eduParagraphs: [
      'Courier dispatch software runs the real-time side of delivery: jobs that arrive during the day and need a vehicle now, not on tomorrow’s plan. Its core is the dispatch board, where incoming jobs meet live courier positions and someone (or something) decides who takes what.',
      'The hard part of courier work is that planning never stops. A pre-planned route meets ad-hoc pickups, priorities change mid-route, and the plan at 9:00 is history by 9:30. Software built for overnight batch planning cannot keep up; dispatch needs live positions, live capacity and instant communication with the courier.',
      'Good dispatch software also closes the loop commercially. Same-day work is priced per job, so every job record needs times, distances, proof and any cash collected, clean enough to invoice from directly.',
      'MLogTech handles both tempos in one system: planned routes for the scheduled work, live dispatch for the same-day work, and the same proof-of-delivery record closing both.',
    ],
    ctaTitle: 'Give your dispatchers a board that keeps up.',
    ctaNote: 'Free trial. Run a real day of jobs through it.',
    faq: [
      {
        q: 'Is this for couriers or delivery fleets?',
        a: 'Both. MLogTech runs pre-planned routes and live ad-hoc dispatch in the same board, so mixed operations do not need two tools.',
      },
      {
        q: 'Can customers book jobs themselves?',
        a: 'Yes, through the customer portal, where they also watch the status of their own jobs.',
      },
      {
        q: 'How do couriers receive jobs?',
        a: 'In the driver app, instantly. New assignments and route changes appear on the device without a phone call.',
      },
      {
        q: 'Does it support cash on delivery?',
        a: 'Yes. COD amounts are captured at the drop and reconciled against jobs in the web panel.',
      },
      {
        q: 'Can I invoice from it?',
        a: 'Job records carry times, proof and amounts, exportable for your invoicing flow. Direct integrations are on the roadmap; ask us about your billing tool.',
      },
    ],
  },

  {
    slug: 'vehicle-checks',
    metaTitle: 'Vehicle check app | Digital walkaround inspections | MLogTech',
    metaDescription:
      'Digital daily walkaround checks for delivery fleets: DVSA-style inspections in the driver app, defects with photos, and a clean audit trail.',
    h1: 'Vehicle checks that actually get done.',
    heroSub:
      'Daily walkaround inspections in the driver app: guided checklist, photos on defects, timestamped records. No paper, no "I’ll do it later".',
    heroMock: 'phone',
    benefits: [
      {
        title: 'Checks happen every day',
        body: 'The walkaround is part of starting the shift in the app, not a separate sheet to forget.',
      },
      {
        title: 'Defects carry evidence',
        body: 'Photo, note, time and location on every defect. The workshop sees exactly what the driver saw.',
      },
      {
        title: 'Audit-ready records',
        body: 'Every check is stored, timestamped and searchable. An inspection request is an export, not an archaeology project.',
      },
      {
        title: 'Unroadworthy vehicles stay parked',
        body: 'Failed checks flag the vehicle immediately, before it is loaded and gone.',
      },
    ],
    stepsTitle: 'From walkaround to workshop.',
    steps: [
      {
        title: 'Driver starts the shift',
        body: 'Guided checklist in the app, item by item around the vehicle.',
      },
      {
        title: 'Defect found',
        body: 'Photo and note attached; severity marked. The check continues.',
      },
      {
        title: 'The record lands',
        body: 'Check results are stored against the vehicle with time and location.',
      },
      {
        title: 'Workshop takes over',
        body: 'Defects queue for repair; the vehicle’s history stays in one place.',
      },
    ],
    splits: [
      {
        title: 'Built around UK compliance reality.',
        body: 'Daily walkaround checks are a legal duty for commercial vehicles in the UK, and DVSA expects records that prove they happened. Digital checks give you the trail without the paper chase.',
        image: '/images/mechanic-wrenches.jpg',
        imageAlt: 'A mechanic in blue overalls holding wrenches in a fleet workshop',
        linkHref: '/features/reports/',
        linkLabel: 'More on records and reports',
      },
      {
        title: 'Defect to repair, one thread.',
        body: 'A defect logged at 6:40 is in the workshop queue at 6:41, with photos. Repairs close against the defect, and the vehicle’s file tells the whole story.',
        image: '/images/oil-filter.jpg',
        imageAlt: 'Hands replacing an oil filter during vehicle maintenance',
        linkHref: '/features/',
        linkLabel: 'See all fleet features',
      },
    ],
    eduTitle: 'Why digital walkaround checks beat paper.',
    eduParagraphs: [
      'A daily walkaround check is the driver’s inspection of the vehicle before it goes out: tires, lights, brakes, load security, and everything else that decides whether the vehicle is safe and legal. In the UK, operators of commercial vehicles are expected to have these checks done and to keep records that prove it.',
      'Paper checklists have two failure modes. They get pencil-whipped: ticked in the cab in ten seconds without a walk. And they get lost: the one sheet that matters is the one missing when an incident or an inspection asks for it.',
      'Digital checks fix both. The app guides the driver item by item, defects require a photo, and every check is timestamped and stored automatically. The record exists because the work happened, not because someone filed a form afterwards.',
      'In MLogTech, checks are part of the same system as routes and deliveries, so a defect does not end in a drawer: it queues for the workshop, and the vehicle’s compliance history lives next to its operational history.',
    ],
    ctaTitle: 'Make the walkaround a habit, not a hope.',
    ctaNote: 'Included in the driver app. Free trial, no driver minimum.',
    faq: [
      {
        q: 'Are digital vehicle checks accepted for compliance?',
        a: 'Yes. What matters is that checks are actually carried out and that you can produce reliable records of them. Digital records with timestamps, photos and driver identity are strong evidence of both.',
      },
      {
        q: 'Can I customize the checklist?',
        a: 'Checklists can be tailored to vehicle type, so a van, a 7.5-tonner and a trailer each get the right items.',
      },
      {
        q: 'What happens when a defect is found?',
        a: 'The driver logs it with a photo and severity. It flags the vehicle, notifies the right people and enters the defect queue for repair.',
      },
      {
        q: 'Do checks work offline?',
        a: 'Yes. Depot yards often have poor signal; checks are captured offline and sync automatically.',
      },
      {
        q: 'Can I see check history per vehicle?',
        a: 'Yes. Every vehicle has a searchable history of checks, defects and repairs, exportable when an audit asks for it.',
      },
    ],
  },
];
