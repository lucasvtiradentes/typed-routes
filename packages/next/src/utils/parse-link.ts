import { IntentionalAny } from '@typed-routes/core';

import { AllRoutes, AvailableRoutes } from '../parsed-routes';

type StaticRoutes = Exclude<AllRoutes[number], { params: IntentionalAny }>;
type DynamicRoutes = Extract<AllRoutes[number], { params: IntentionalAny }>;

type ExtractSearchParams<TCurRoute, TSource> = Extract<TSource, { href: TCurRoute; searchParams: IntentionalAny }>['searchParams'] extends never
  ? { searchParams?: never }
  : {
      searchParams: Partial<Extract<TSource, { href: TCurRoute; searchParams: IntentionalAny }>['searchParams']>;
    };

export type ParseTypedLinkProps<TCurRoute extends AvailableRoutes> = {
  href: TCurRoute;
} & (TCurRoute extends DynamicRoutes['href']
  ? ExtractSearchParams<TCurRoute, DynamicRoutes> & {
      params: Extract<DynamicRoutes, { href: TCurRoute; params: IntentionalAny }>['params'];
    }
  : ExtractSearchParams<TCurRoute, StaticRoutes>);

// =============================================================================

export const parseTypedLink = <TCurRoute extends AvailableRoutes>(props: ParseTypedLinkProps<TCurRoute>) => {
  let result: string = props.href;

  if ('params' in props && typeof props.params === 'object' && props.params !== null) {
    Object.entries(props.params).forEach(([key, value]) => (result = result.replace(`:${key}`, String(value))));
  }

  if (props.searchParams) {
    const searchParams = new URLSearchParams('');
    Object.entries(props.searchParams).forEach(([key, value]) => searchParams.set(key, String(value)));
    result += `?${searchParams.toString()}`;
  }

  return result;
};
