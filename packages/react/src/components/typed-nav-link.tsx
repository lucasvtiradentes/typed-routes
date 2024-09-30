import { ComponentProps } from 'react';
import { NavLink } from 'react-router-dom';

import { AvailableRoutes } from '../app-router';
import { getUpdatedProps, ModifiedRouterDomComponent } from '../utils/modified-dom-element-utils';

type NavLinkProps = Omit<ComponentProps<typeof NavLink>, 'to'>;

export const TypedNavLink = <TCurRoute extends AvailableRoutes>(props: ModifiedRouterDomComponent<NavLinkProps, TCurRoute>) => {
  const updatedProps = getUpdatedProps(props);
  return <NavLink {...updatedProps} />;
};
