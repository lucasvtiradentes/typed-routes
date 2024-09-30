import { RemoveReadonly } from '@lucasvtiradentes/types';

import { allRoutes, AllRoutes, AvailableRoutes } from '../routes';

export const getRouteByHref = <T extends AvailableRoutes>(checkHref: T): RemoveReadonly<Extract<AllRoutes[number], { href: T }>> => {
  const route = allRoutes.find(({ href }) => href === checkHref);
  if (!route) {
    throw new Error(`Route not found for href: ${checkHref}`);
  }
  return route as RemoveReadonly<Extract<AllRoutes[number], { href: T }>>; // Retorna a rota com a tipagem exata
};
