export interface Solution {
  slug: string;
  title: string;
  nav: string;
  short: string;
  /** true when the dedicated page exists; false renders as hub anchor */
  hasPage: boolean;
}

export const solutions: Solution[] = [
  {
    slug: 'route-planning',
    title: 'Route planning software',
    nav: 'Route planning',
    short: 'Build and optimise multi-stop routes in minutes, not spreadsheets.',
    hasPage: true,
  },
  {
    slug: 'last-mile-delivery',
    title: 'Last mile delivery software',
    nav: 'Last mile delivery',
    short: 'Run the final leg with live visibility and proof at the door.',
    hasPage: true,
  },
  {
    slug: 'driver-app',
    title: 'Delivery driver app',
    nav: 'Driver app',
    short: 'Routes, schedules, documents and ePOD in one app for drivers.',
    hasPage: true,
  },
  {
    slug: 'tms',
    title: 'Transport management system',
    nav: 'TMS',
    short: 'Plan, dispatch and account for every order across your fleet.',
    hasPage: true,
  },
  {
    slug: 'courier-dispatch',
    title: 'Courier dispatch software',
    nav: 'Courier dispatch',
    short: 'Assign jobs, track progress and invoice from one dispatch board.',
    hasPage: true,
  },
  {
    slug: 'vehicle-checks',
    title: 'Vehicle check app',
    nav: 'Vehicle checks',
    short: 'Digital walkaround checks with defects flowing straight to the workshop.',
    hasPage: true,
  },
];

export function solutionHref(s: Solution): string {
  return s.hasPage ? `/solutions/${s.slug}/` : `/solutions/#${s.slug}`;
}
