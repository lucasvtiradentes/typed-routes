import { ComponentProps } from 'react';
import { NavLink } from 'react-router-dom';

import { AvailableRoutes } from '..';

import { parseProps, ModifiedRouterDomComponent } from '../utils/parse-props';

type NavLinkProps = Omit<ComponentProps<typeof NavLink>, 'to'>;

export const TypedNavLink = <TCurRoute extends AvailableRoutes>(props: ModifiedRouterDomComponent<NavLinkProps, TCurRoute>) => {
  const parsedProps = parseProps(props);
  return <NavLink {...parsedProps} />;
};
