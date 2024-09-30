import { RouteProps } from 'react-router-dom';
import { IntentionalAny } from '@lucasvtiradentes/types';

export type RouteShape = RouteProps & {
  finalPath: string;
  params?: IntentionalAny;
  searchParams?: IntentionalAny;
};
