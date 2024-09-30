import Link from 'next/link';
import { ComponentProps } from 'react';

import { AvailableRoutes } from '../types';
import { getUpdatedProps, ModifiedRouterDomComponent } from '../utils/utils';

type LinkProps = Omit<ComponentProps<typeof Link>, 'href'>;

export const TypedLink = <TCurRoute extends AvailableRoutes>(props: ModifiedRouterDomComponent<LinkProps, TCurRoute>) => {
  const updatedProps = getUpdatedProps(props);
  return <Link {...updatedProps} />;
};
