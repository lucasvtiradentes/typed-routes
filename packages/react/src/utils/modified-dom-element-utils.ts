import { ObjectHelper } from '@lucasvtiradentes/utils';
import { BetterOmit } from '@lucasvtiradentes/types';

import { AvailableRoutes } from '../app-router';
import { parseRoute, ParseRouteProps } from './route-parser';

export type ModifiedRouterDomComponent<TDomComponentProps, TCurRoute extends AvailableRoutes> = TDomComponentProps & {
  to: TCurRoute;
} & BetterOmit<ParseRouteProps<TCurRoute>, 'path'>;

export const getUpdatedProps = <TCurRoute extends AvailableRoutes, TDomComponentProps>(
  props: ModifiedRouterDomComponent<TDomComponentProps, TCurRoute>
) => {
  const toParsed = parseRoute({
    path: props.to,
    searchParams: props.searchParams,
    ...('params' in props && { params: props.params })
  } as unknown as ParseRouteProps<TCurRoute>);
  const originalElementProps = ObjectHelper.omitObjectKeys(props, ['searchParams', 'params'] as (keyof TDomComponentProps)[]);

  const updatedProps = {
    ...originalElementProps,
    to: toParsed
  } as const;

  return updatedProps;
};
