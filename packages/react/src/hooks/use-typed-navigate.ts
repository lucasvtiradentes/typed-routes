import { useCallback } from 'react';
import { NavigateOptions, useNavigate } from 'react-router-dom';

import { AvailableRoutes } from '..';

import { parseLink, ParseLinkProps } from '../utils/parse-link';

export const useTypedNavigate = () => {
  const navigate = useNavigate();

  const typedNavigate = useCallback(
    <TCurRoute extends AvailableRoutes>(toProps: ParseLinkProps<TCurRoute>, options?: NavigateOptions) => {
      const to = parseLink(toProps);
      navigate(to, options);
    },
    [navigate]
  );

  return { typedNavigate };
};
