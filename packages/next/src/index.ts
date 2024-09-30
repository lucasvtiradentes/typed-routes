import { RouteShape } from '@typed-routes/core';

// import { dynamicRoutes, staticRoutes } from './example';
// ...staticRoutes, ...dynamicRoutes

export const allRoutes = [] satisfies RouteShape[];
export type AllRoutes = typeof allRoutes;
export type AvailableRoutes = AllRoutes[number]['href'];
