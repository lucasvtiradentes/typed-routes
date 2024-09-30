import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { appRouter, appRoutes } from '@/pages/router';

import { RouteShape } from './types/route.type';

const allRoutes = appRoutes satisfies RouteShape[];
export type AllRoutes = typeof allRoutes;
export type AvailableRoutes = AllRoutes[number]['finalPath'];

export const AppRouter = () => <RouterProvider router={createBrowserRouter(appRouter)} />;
