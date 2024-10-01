import { NextRouteShape } from './route-shape';
export type { NextRouteShape };

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
