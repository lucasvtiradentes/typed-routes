import { BetterOmit, ObjectHelper } from '@typed-routes/core';

import { AvailableRoutes } from '../parsed-routes';
import { parseTypedLink, ParseTypedLinkProps } from './parse-link';

export type ModifiedRouterDomComponent<TDomComponentProps, TCurRoute extends AvailableRoutes> = TDomComponentProps & {
  href: TCurRoute;
} & BetterOmit<ParseTypedLinkProps<TCurRoute>, 'href'>;

export const parseProps = <TCurRoute extends AvailableRoutes, TDomComponentProps>(
  props: ModifiedRouterDomComponent<TDomComponentProps, TCurRoute>
) => {
  const parsedLink = parseTypedLink({
    href: props.href,
    searchParams: props.searchParams,
    ...('params' in props && { params: props.params })
  } as unknown as ParseTypedLinkProps<TCurRoute>);

  const originalElementProps = ObjectHelper.omitObjectKeys(props, ['searchParams', 'params'] as (keyof TDomComponentProps)[]);

  const updatedProps = {
    ...originalElementProps,
    href: parsedLink
  } as const;

  return updatedProps;
};
