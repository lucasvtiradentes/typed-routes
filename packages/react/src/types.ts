import { ReactRouteShape } from '@typed-routes/core';
export type { ReactRouteShape } from '@typed-routes/core';

export interface Register {
  // allRoutes: ReactRouteShape[]
}

type RegisteredRoutes = Register extends {
  allRoutes: infer TRoutes extends ReadonlyArray<ReactRouteShape>;
}
  ? {
      allRoutes: TRoutes;
    }
  : {
      allRoutes: ReadonlyArray<ReactRouteShape>;
    };

export type AllRoutes = RegisteredRoutes['allRoutes'];
export type AvailableRoutes = AllRoutes[number]['href'];
