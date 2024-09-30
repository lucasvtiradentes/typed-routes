import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { appRouter, appRoutes } from './example';

export const AppRouter = () => <RouterProvider router={createBrowserRouter(appRouter)} />;

declare module '@typed-routes/react' {
  interface Register {
    allRoutes: typeof appRoutes;
  }
}
