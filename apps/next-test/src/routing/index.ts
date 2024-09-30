import { NextRouteShape } from '@typed-routes/next';

import { dynamicRoutes, staticRoutes } from './example';

const appRoutes = [...staticRoutes, ...dynamicRoutes] as const satisfies ReadonlyArray<NextRouteShape>;

declare module '@typed-routes/next' {
  interface Register {
    allRoutes: typeof appRoutes;
  }
}
