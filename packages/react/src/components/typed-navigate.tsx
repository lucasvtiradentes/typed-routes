import { ComponentProps } from 'react';
import { Navigate } from 'react-router-dom';

import { AvailableRoutes } from '..';

import { getUpdatedProps, ModifiedRouterDomComponent } from '../utils/modified-dom-element-utils';

type NavigateProps = Omit<ComponentProps<typeof Navigate>, 'to'>;

export const TypedNavigate = <TCurRoute extends AvailableRoutes>(props: ModifiedRouterDomComponent<NavigateProps, TCurRoute>) => {
  const updatedProps = getUpdatedProps(props);
  return <Navigate {...updatedProps} />;
};
