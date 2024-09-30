import { ReactRouteShape } from '@typed-routes/react';
import { PropsWithChildren } from 'react';
import { Outlet, RouteObject } from 'react-router-dom';

import { AboutPage } from '../pages/about';
import { HomePage } from '../pages/home';

const Layout = ({ children }: PropsWithChildren) => <div>{children}</div>;

// =============================================================================

const privateBaseRoute = `/app` as const;

const privateRoutes = [
  {
    href: `${privateBaseRoute}/dashboard`,
    path: 'dashboard',
    element: <AboutPage />,
    params: {} as { color: string; title: string }
  },
  {
    href: `${privateBaseRoute}/finances/transactions`,
    path: 'finances/transactions',
    element: <AboutPage />,
    searchParams: {} as { date: string }
  },
  {
    href: `${privateBaseRoute}/finances/credit-card-transactions`,
    path: 'finances/credit-card-transactions',
    element: <AboutPage />
  },
  {
    href: `${privateBaseRoute}/finances/accounts`,
    path: 'finances/accounts',
    element: <AboutPage />
  },
  {
    href: `${privateBaseRoute}/finances/import-rules`,
    path: 'finances/import-rules',
    element: <AboutPage />
  },
  {
    href: `${privateBaseRoute}/finances/credit-cards`,
    path: 'finances/credit-cards',
    element: <AboutPage />
  },
  {
    href: `${privateBaseRoute}/finances/categories`,
    path: 'finances/categories',
    element: <AboutPage />
  }
] as const satisfies ReactRouteShape[];

// =============================================================================

const authBaseRoute = `` as const;

const authRoutes = [
  {
    href: `${authBaseRoute}`,
    path: authBaseRoute,
    element: <HomePage />
  }
] as const satisfies ReactRouteShape[];

const logoutRoute = [
  {
    href: `${authBaseRoute}/logout`,
    path: `${authBaseRoute}/logout`,
    element: <AboutPage />
  }
] as const satisfies ReactRouteShape[];

// =============================================================================

export const appRouter = [
  {
    path: authBaseRoute,
    ErrorBoundary: AboutPage,
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: authRoutes
  },
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
  ...logoutRoute,
  {
    path: '/*',
    element: <AboutPage />
  }
] as const satisfies RouteObject[];

export const appRoutes = [...authRoutes, ...logoutRoute, ...privateRoutes] satisfies ReactRouteShape[];
