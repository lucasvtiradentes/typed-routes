import { IntentionalAny } from '@typed-routes/core';

import { AllRoutes, AvailableRoutes } from '..';

type StaticRoutes = Exclude<AllRoutes[number], { params: IntentionalAny }>;
type DynamicRoutes = Extract<AllRoutes[number], { params: IntentionalAny }>;

type ExtractSearchParams<TCurRoute, TSource> = Extract<TSource, { finalPath: TCurRoute; searchParams: IntentionalAny }>['searchParams'] extends never
  ? { searchParams?: never }
  : {
      searchParams: Partial<Extract<TSource, { finalPath: TCurRoute; searchParams: IntentionalAny }>['searchParams']>;
    };

export type ParseRouteProps<TCurRoute extends AvailableRoutes> = {
  path: TCurRoute;
} & (TCurRoute extends DynamicRoutes['finalPath']
  ? ExtractSearchParams<TCurRoute, DynamicRoutes> & {
      params: Extract<DynamicRoutes, { finalPath: TCurRoute; params: IntentionalAny }>['params'];
    }
  : ExtractSearchParams<TCurRoute, StaticRoutes>);

// =============================================================================

export const parseRoute = <TCurRoute extends AvailableRoutes>(props: ParseRouteProps<TCurRoute>) => {
  let result: string = props.path;

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
