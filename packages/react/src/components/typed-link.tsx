import { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import { AvailableRoutes } from '..';

import { parseProps, ModifiedRouterDomComponent } from '../utils/parse-props';

type LinkProps = Omit<ComponentProps<typeof Link>, 'to'>;

export const TypedLink = <TCurRoute extends AvailableRoutes>(props: ModifiedRouterDomComponent<LinkProps, TCurRoute>) => {
  const parsedProps = parseProps(props);
  return <Link {...parsedProps} />;
};
