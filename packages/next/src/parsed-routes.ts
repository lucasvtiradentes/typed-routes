import { NextRouteShape, Register } from './types';

export type RegisteredRoutes = Register extends {
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
