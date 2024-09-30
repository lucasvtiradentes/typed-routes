import { ReactNode } from 'react';

import { IntentionalAny } from './types';

type CommonProps = {
  href: string;
  params?: IntentionalAny;
  searchParams?: IntentionalAny;
};

export type NextRouteShape = CommonProps & {
  label: string;
};

export type ReactRouteShape = CommonProps & {
  path: string;
  element: ReactNode;
};

// export type RouteShape = NextRouteShape | ReactRouteShape;
