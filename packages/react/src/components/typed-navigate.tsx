import { ComponentProps } from 'react';
import { Navigate } from 'react-router-dom';

import { AvailableRoutes } from '..';

import { parseProps, ModifiedRouterDomComponent } from '../utils/parse-props';

type NavigateProps = Omit<ComponentProps<typeof Navigate>, 'to'>;

export const TypedNavigate = <TCurRoute extends AvailableRoutes>(props: ModifiedRouterDomComponent<NavigateProps, TCurRoute>) => {
  const parsedProps = parseProps(props);
  return <Navigate {...parsedProps} />;
};
