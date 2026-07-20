export interface Feature {
  slug: string;
  title: string;
  short: string;
}

// The 9 features that get dedicated pages (SPEC-01). Until those pages ship,
// navigation points at hub anchors: /features/#slug
export const featured: Feature[] = [
  { slug: 'proof-of-delivery', title: 'Electronic proof of delivery', short: 'Signature, photo and barcode captured at the door, synced instantly.' },
  { slug: 'live-tracking', title: 'Live tracking and ETA', short: 'Every vehicle on the map, with a branded tracking page for your customer.' },
  { slug: 'notifications', title: 'Delivery notifications', short: 'Automatic email and push updates at dispatch, en route and delivered.' },
  { slug: 'barcode-scanner', title: 'QR and barcode scanner', short: 'Scan at loading and at the door to kill wrong-parcel deliveries.' },
  { slug: 'cash-on-delivery', title: 'Cash on delivery', short: 'Record payments at the door and reconcile them against orders.' },
  { slug: 'reports', title: 'Analytics and reports', short: 'Delivery performance per driver, route and customer, exportable.' },
  { slug: 'customer-portal', title: 'Customer portal', short: 'Let shippers and 3PL clients create orders and follow their own deliveries.' },
  { slug: 'shipping-labels', title: 'Shipping labels', short: 'Configurable labels generated with the route, ready to print.' },
  { slug: 'geofencing', title: 'Geofencing', short: 'Arrival and departure logged automatically at every stop.' },
];

// Full catalog for the hub grid, split like the product is actually used.
export const webPanel: string[] = [
  'Delivery management board',
  'Drag-and-drop route planning',
  'Route optimisation',
  'Real-time map',
  'Vehicle tracking',
  'Fleet and shift management',
  'Order import (CSV, API)',
  'Custom order fields',
  'Instant notifications',
  'Arrival and departure logs',
  'Analytics and reports',
  'Report export',
  'Search and filters',
  'Customer portal',
  'Shipping labels',
  'Two-way driver messaging',
  'Non-delivery reasons',
  'API and webhooks',
];

export const driverApp: string[] = [
  'Electronic signature',
  'Photo proof',
  'QR and barcode scanner',
  'Route navigation',
  'Order details and notes',
  'One-touch completion',
  'Bulk proof of delivery',
  'Pickup and collection',
  'Cash on delivery',
  'Actual quantity capture',
  'Vehicle walkaround checks',
  'Customer feedback',
  'Direct call to customer',
  'Push notifications',
  'Geotags and timestamps',
  'Works offline',
];
