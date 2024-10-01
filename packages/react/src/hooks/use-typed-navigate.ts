import { useCallback } from 'react';
import { NavigateOptions, useNavigate } from 'react-router-dom';

import { AvailableRoutes } from '..';

import { parseRoute, ParseRouteProps } from '../utils/route-parser';

export const useTypedNavigate = () => {
  const navigate = useNavigate();

  const typedNavigate = useCallback(
    <TCurRoute extends AvailableRoutes>(toProps: ParseRouteProps<TCurRoute>, options?: NavigateOptions) => {
      const to = parseRoute(toProps);
      navigate(to, options);
    },
    [navigate]
  );

  return { typedNavigate };
};
