import { NextRouteShape } from '@typed-routes/core';
export type { NextRouteShape } from '@typed-routes/core';

// export const allRoutes = [] satisfies NextRouteShape[];
// export type AllRoutes = typeof allRoutes;
// export type AvailableRoutes = AllRoutes[number]['href'];

export interface Register {
  // allRoutes: NextRouteShape[]
}

type RegisteredRoutes = Register extends {
  allRoutes: infer TRoutes extends ReadonlyArray<NextRouteShape>;
}
  ? {
      allRoutes: TRoutes;
    }
  : {
      allRoutes: ReadonlyArray<NextRouteShape>;
    };

export type AllRoutes = RegisteredRoutes['allRoutes'];
export type AvailableRoutes = AllRoutes[number]['href'];
