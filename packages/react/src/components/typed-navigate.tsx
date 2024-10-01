import { ComponentProps } from 'react';
import { Navigate } from 'react-router-dom';

import { AvailableRoutes } from '../parsed-routes';
import { ModifiedRouterDomComponent, parseProps } from '../utils/parse-props';

type NavigateProps = Omit<ComponentProps<typeof Navigate>, 'to'>;

export const TypedNavigate = <TCurRoute extends AvailableRoutes>(props: ModifiedRouterDomComponent<NavigateProps, TCurRoute>) => {
  const { href, ...parsedProps } = parseProps(props);
  return <Navigate to={href} {...parsedProps} />;
};
