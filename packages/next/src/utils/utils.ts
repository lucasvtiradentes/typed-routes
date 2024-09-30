import { ObjectHelper } from '@lucasvtiradentes/utils';
import { BetterOmit } from '@lucasvtiradentes/types';

import { AvailableRoutes } from '../routes';
import { parseRoute, ParseRouteProps } from './route-parser';

export type ModifiedRouterDomComponent<TDomComponentProps, TCurRoute extends AvailableRoutes> = TDomComponentProps & {
  href: TCurRoute;
} & BetterOmit<ParseRouteProps<TCurRoute>, 'href'>;

export const getUpdatedProps = <TCurRoute extends AvailableRoutes, TDomComponentProps>(
  props: ModifiedRouterDomComponent<TDomComponentProps, TCurRoute>
) => {
  const toParsed = parseRoute({
    href: props.href,
    searchParams: props.searchParams,
    ...('params' in props && { params: props.params })
  } as unknown as ParseRouteProps<TCurRoute>);
  const originalElementProps = ObjectHelper.omitObjectKeys(props, ['searchParams', 'params'] as (keyof TDomComponentProps)[]);

  const updatedProps = {
    ...originalElementProps,
    href: toParsed
  } as const;

  return updatedProps;
};
