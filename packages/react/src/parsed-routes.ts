import { ReactRouteShape, Register } from './types';

export type RegisteredRoutes = Register extends {
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
