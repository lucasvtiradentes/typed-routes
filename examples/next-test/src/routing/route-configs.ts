import { NextRouteShape } from '@typed-routes/next';

type ArticleSlug = 'a-slug' | 'another-slug' | 'yet-another-slug';
type PersonNickname = 'john-doe' | 'jane-doe';
type BlogFilters = { tag?: string; author?: PersonNickname };

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
  { label: 'Estatísticas', href: '/adm/stats' },
  { label: 'Palavras', href: '/words' }
] as const satisfies ReadonlyArray<NextRouteShape>;

export const dynamicRoutes = [
  { label: 'Artigo', href: '/blog/:slug_title', params: {} as { slug_title: ArticleSlug } },
  { label: 'Pessoa', href: '/personal/people/:nickname', params: {} as { nickname: PersonNickname } }
] as const satisfies ReadonlyArray<NextRouteShape>;

export const appRoutes = [...staticRoutes, ...dynamicRoutes] as const satisfies ReadonlyArray<NextRouteShape>;
