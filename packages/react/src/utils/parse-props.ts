import { BetterOmit, ObjectHelper } from '@typed-routes/core';

import { AvailableRoutes } from '..';

import { parseLink, ParseLinkProps } from './parse-link';

export type ModifiedRouterDomComponent<TDomComponentProps, TCurRoute extends AvailableRoutes> = TDomComponentProps & {
  to: TCurRoute;
} & BetterOmit<ParseLinkProps<TCurRoute>, 'href'>;

export const parseProps = <TCurRoute extends AvailableRoutes, TDomComponentProps>(
  props: ModifiedRouterDomComponent<TDomComponentProps, TCurRoute>
) => {
  const toParsed = parseLink({
    to: props.to,
    searchParams: props.searchParams,
    ...('params' in props && { params: props.params })
  } as unknown as ParseLinkProps<TCurRoute>);
  const originalElementProps = ObjectHelper.omitObjectKeys(props, ['searchParams', 'params'] as (keyof TDomComponentProps)[]);

  const updatedProps = {
    ...originalElementProps,
    to: toParsed
  } as const;

  return updatedProps;
};
