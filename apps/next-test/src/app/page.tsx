import { TypedLink } from '@typed-routes/next';
import Link from 'next/link';
import React from 'react';

function Page() {
  return (
    <>
      <Link href="/blog/yet-another-slug">default no type-safe next component</Link>

      <TypedLink href="/blog/:slug_title" params={{ slug_title: 'another-slug' }}>
        typed no type-safe next component
      </TypedLink>
    </>
  );
}

export default Page;
