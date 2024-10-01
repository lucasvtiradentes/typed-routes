import { TypedLink } from '@typed-routes/next';
import Link from 'next/link';

function Page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link href="/blog/wrong-slug-i-have-no-idea">default no type-safe next component</Link>

      <TypedLink href="/blog/:slug_title" params={{ slug_title: 'yet-another-slug' }}>
        type-safe custom component
      </TypedLink>
    </div>
  );
}

export default Page;
