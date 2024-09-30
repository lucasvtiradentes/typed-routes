import { NextRouteShape } from '@typed-routes/core';
export type { NextRouteShape } from '@typed-routes/core';

// import { dynamicRoutes, staticRoutes } from './example';
// ...staticRoutes, ...dynamicRoutes

export const allRoutes = [] satisfies NextRouteShape[];
export type AllRoutes = typeof allRoutes;
export type AvailableRoutes = AllRoutes[number]['href'];
