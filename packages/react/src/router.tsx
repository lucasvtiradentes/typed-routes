import { Outlet, RouteObject } from 'react-router-dom';

import { AuthLayout } from '@/common/components/layout/auth.layout';
import { PrivateLayout } from '@/common/components/layout/private-layout/private.layout';
import { CONFIGS } from '@/consts';
import { RedirectIfLoggedIn } from '@/features/authentication/components/redirect-if-loggedin';
import { RouteShape } from '@/features/routing/types/route.type';
import { ViewIfLoggedIn } from '@/features/authentication/components/view-if-loggedin';

import { LoginPage } from './auth/login/page';
import { LogoutPage } from './auth/logout/page';
import { DashboardPage } from './dashboard/page';
import { ErrorPage } from './public/error/page';
import { NotFoundPage } from './public/not-found/page';
import { TransactionsPage } from './finances/transactions/page';
import { AccountsPage } from './finances/accounts/page';
import { ImportRulesPage } from './finances/import-rules/page';
import { CreditCardsPage } from './finances/credit-cards/page';
import { CategoriesPage } from './finances/categories/page';
import { CreditCardTransactionsPage } from './finances/credit-card-transactions/page';

// =============================================================================

const privateBaseRoute = `${CONFIGS.base_url}/app` as const;

const privateRoutes = [
  {
    finalPath: `${privateBaseRoute}/dashboard`,
    path: 'dashboard',
    element: <DashboardPage />
  },
  {
    finalPath: `${privateBaseRoute}/finances/transactions`,
    path: 'finances/transactions',
    element: <TransactionsPage />
  },
  {
    finalPath: `${privateBaseRoute}/finances/credit-card-transactions`,
    path: 'finances/credit-card-transactions',
    element: <CreditCardTransactionsPage />
  },
  {
    finalPath: `${privateBaseRoute}/finances/accounts`,
    path: 'finances/accounts',
    element: <AccountsPage />
  },
  {
    finalPath: `${privateBaseRoute}/finances/import-rules`,
    path: 'finances/import-rules',
    element: <ImportRulesPage />
  },
  {
    finalPath: `${privateBaseRoute}/finances/credit-cards`,
    path: 'finances/credit-cards',
    element: <CreditCardsPage />
  },
  {
    finalPath: `${privateBaseRoute}/finances/categories`,
    path: 'finances/categories',
    element: <CategoriesPage />
  }
] as const satisfies RouteShape[];

// =============================================================================

const authBaseRoute = `${CONFIGS.base_url}` as const;

const authRoutes = [
  {
    finalPath: `${authBaseRoute}`,
    path: authBaseRoute,
    element: <LoginPage />
  }
] as const satisfies RouteShape[];

const logoutRoute = [
  {
    finalPath: `${authBaseRoute}/logout`,
    path: `${authBaseRoute}/logout`,
    element: <LogoutPage />
  }
] as const satisfies RouteShape[];

// =============================================================================

export const appRouter = [
  {
    path: authBaseRoute,
    ErrorBoundary: ErrorPage,
    element: (
      <RedirectIfLoggedIn redirectTo="/admin/app/dashboard">
        <AuthLayout>
          <Outlet />
        </AuthLayout>
      </RedirectIfLoggedIn>
    ),
    children: authRoutes
  },
  {
    path: privateBaseRoute,
    ErrorBoundary: ErrorPage,
    element: (
      <ViewIfLoggedIn redirectTo="/admin">
        <PrivateLayout>
          <Outlet />
        </PrivateLayout>
      </ViewIfLoggedIn>
    ),
    children: privateRoutes
  },
  ...logoutRoute,
  {
    path: '/*',
    element: <NotFoundPage />
  }
] as const satisfies RouteObject[];

export const appRoutes = [...authRoutes, ...logoutRoute, ...privateRoutes] satisfies RouteShape[];
