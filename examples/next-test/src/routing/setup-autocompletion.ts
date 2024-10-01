import { appRoutes } from './route-configs';

declare module '@typed-routes/next' {
  interface Register {
    allRoutes: typeof appRoutes;
  }
}
