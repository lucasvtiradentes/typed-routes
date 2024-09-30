import { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import { AvailableRoutes } from '../app-router';
import { getUpdatedProps, ModifiedRouterDomComponent } from '../utils/modified-dom-element-utils';

type LinkProps = Omit<ComponentProps<typeof Link>, 'to'>;

export const TypedLink = <TCurRoute extends AvailableRoutes>(props: ModifiedRouterDomComponent<LinkProps, TCurRoute>) => {
  const updatedProps = getUpdatedProps(props);
  return <Link {...updatedProps} />;
};
