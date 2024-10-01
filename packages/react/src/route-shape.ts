import { CommonRouteProps } from '@typed-routes/core';
import { ReactNode } from 'react';

export type ReactRouteShape = CommonRouteProps & {
  path: string;
  element: ReactNode;
};
