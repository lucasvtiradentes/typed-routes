import { useCallback } from 'react';
import { NavigateOptions, useNavigate } from 'react-router-dom';

import { AvailableRoutes } from '../parsed-routes';
import { parseTypedLink, ParseTypedLinkProps } from '../utils/parse-link';

export const useTypedNavigate = () => {
  const navigate = useNavigate();

  const typedNavigate = useCallback(
    <TCurRoute extends AvailableRoutes>(toProps: ParseTypedLinkProps<TCurRoute>, options?: NavigateOptions) => {
      const parsedLink = parseTypedLink(toProps);
      navigate(parsedLink, options);
    },
    [navigate]
  );

  return { typedNavigate };
};
