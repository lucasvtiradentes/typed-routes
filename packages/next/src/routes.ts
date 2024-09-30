import { BlogFilters } from '@/app/(pages)/blog/page-with-params';
import { PersonNickname } from '@/features/people';
import { ArticleSlug } from '@/_content/all_articles';

import { RouteShape } from './type';

export const staticRoutes = [
  { label: 'Início', href: '/' },
  { label: 'Blog', href: '/blog', searchParams: {} as BlogFilters },
  { label: 'Podcast', href: '/podcast' },
  { label: 'Galeria', href: '/personal/galery' },
  { label: 'Viagens', href: '/personal/travels' },
  { label: 'Pessoas', href: '/personal/people' },
  { label: 'Projetos', href: '/tech/projects' },
  { label: 'Setup', href: '/tech/setup' },
  { label: 'Esse site', href: '/tech/this-site' },
  { label: 'Estatísticas', href: '/adm/stats', hidden: true },
  { label: 'Palavras', href: '/words' }
] as const satisfies RouteShape[];

export const dynamicRoutes = [
  { label: 'Artigo', href: '/blog/:slug_title', params: {} as { slug_title: ArticleSlug } },
  { label: 'Pessoa', href: '/personal/people/:nickname', params: {} as { nickname: PersonNickname } }
] as const satisfies RouteShape[];

export const allRoutes = [...staticRoutes, ...dynamicRoutes] satisfies RouteShape[];

export type AllRoutes = typeof allRoutes;
export type AvailableRoutes = AllRoutes[number]['href'];
