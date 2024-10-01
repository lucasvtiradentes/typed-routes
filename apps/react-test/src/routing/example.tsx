import { ReactRouteShape } from '@typed-routes/react';
import { Outlet, RouteObject } from 'react-router-dom';

import { AbountPageSearchParams, AboutPage } from '../pages/about';
import { DashboardPage, DashboardPageSearchParams } from '../pages/dashboard';
import { Layout } from '../pages/layout';
import { HomePage } from '../pages/home';

// =============================================================================

const privateBaseRoute = `/app` as const;

const privateRoutes = [
  {
    href: `${privateBaseRoute}/dashboard`,
    path: 'dashboard',
    element: <DashboardPage />,
    params: {} as DashboardPageSearchParams
  },
  {
    href: `${privateBaseRoute}/about`,
    path: 'about',
    element: <AboutPage />,
    searchParams: {} as AbountPageSearchParams
  }
] as const satisfies Array<ReactRouteShape>;

// =============================================================================

export const appRouter = [
  {
    path: privateBaseRoute,
    ErrorBoundary: AboutPage,
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: privateRoutes
  },
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/*',
    element: <AboutPage />
  }
] as const satisfies RouteObject[];

export const appRoutes = [...privateRoutes] satisfies ReadonlyArray<ReactRouteShape>;
