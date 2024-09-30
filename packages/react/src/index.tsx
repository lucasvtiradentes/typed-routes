import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouteShape } from '@typed-routes/core';

import { appRouter, appRoutes } from './example';

const allRoutes = appRoutes satisfies RouteShape[];
export type AllRoutes = typeof allRoutes;
export type AvailableRoutes = AllRoutes[number]['href'];

export const AppRouter = () => <RouterProvider router={createBrowserRouter(appRouter)} />;
