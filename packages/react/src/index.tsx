import { ReactRouteShape } from '@typed-routes/core';
export type { ReactRouteShape } from '@typed-routes/core';

const allRoutes = [] satisfies ReactRouteShape[];
export type AllRoutes = typeof allRoutes;
export type AvailableRoutes = AllRoutes[number]['href'];
