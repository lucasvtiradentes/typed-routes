import { appRoutes } from './router-configs';

declare module '@typed-routes/react' {
  interface Register {
    allRoutes: typeof appRoutes;
  }
}
