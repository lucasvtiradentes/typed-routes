import Link from 'next/link';
import { ComponentProps } from 'react';

import { AvailableRoutes } from '../types';
import { parseProps, ModifiedRouterDomComponent } from '../utils/parse-props';

type LinkProps = Omit<ComponentProps<typeof Link>, 'href'>;

export const TypedLink = <TCurRoute extends AvailableRoutes>(props: ModifiedRouterDomComponent<LinkProps, TCurRoute>) => {
  const parsedProps = parseProps(props);
  return <Link {...parsedProps} />;
};
