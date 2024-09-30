import { PropsWithChildren } from 'react';
import { Outlet, RouteObject } from 'react-router-dom';
import { ReactRouteShape } from '@typed-routes/react';

const Layout = ({ children }: PropsWithChildren) => <div>{children}</div>;
const Page = () => <div>Page</div>;

// =============================================================================

const privateBaseRoute = `/app` as const;

const privateRoutes = [
  {
    href: `${privateBaseRoute}/dashboard`,
    path: 'dashboard',
    element: <Page />
  },
  {
    href: `${privateBaseRoute}/finances/transactions`,
    path: 'finances/transactions',
    element: <Page />
  },
  {
    href: `${privateBaseRoute}/finances/credit-card-transactions`,
    path: 'finances/credit-card-transactions',
    element: <Page />
  },
  {
    href: `${privateBaseRoute}/finances/accounts`,
    path: 'finances/accounts',
    element: <Page />
  },
  {
    href: `${privateBaseRoute}/finances/import-rules`,
    path: 'finances/import-rules',
    element: <Page />
  },
  {
    href: `${privateBaseRoute}/finances/credit-cards`,
    path: 'finances/credit-cards',
    element: <Page />
  },
  {
    href: `${privateBaseRoute}/finances/categories`,
    path: 'finances/categories',
    element: <Page />
  }
] as const satisfies ReactRouteShape[];

// =============================================================================

const authBaseRoute = `/` as const;

const authRoutes = [
  {
    href: `${authBaseRoute}`,
    path: authBaseRoute,
    element: <Page />
  }
] as const satisfies ReactRouteShape[];

const logoutRoute = [
  {
    href: `${authBaseRoute}/logout`,
    path: `${authBaseRoute}/logout`,
    element: <Page />
  }
] as const satisfies ReactRouteShape[];

// =============================================================================

export const appRouter = [
  {
    path: authBaseRoute,
    ErrorBoundary: Page,
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: authRoutes
  },
  {
    path: privateBaseRoute,
    ErrorBoundary: Page,
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
    element: <Page />
  }
] as const satisfies RouteObject[];

export const appRoutes = [...authRoutes, ...logoutRoute, ...privateRoutes] satisfies ReactRouteShape[];
