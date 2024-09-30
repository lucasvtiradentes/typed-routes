import { IntentionalAny } from './types';

export type RouteShape = {
  label: string;
  href: string;
  params?: IntentionalAny;
  searchParams?: IntentionalAny;
  hidden?: boolean;
};
