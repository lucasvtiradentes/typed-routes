import { TypedLink } from '@typed-routes/next';
import React from 'react';

function Page() {
  return (
    <>
      <div>teste</div>
      <TypedLink href="/personal/people" />
      <TypedLink href="/blog/:slug_title" params={{ slug_title: 'yet-another-slug' }} />
    </>
  );
}

export default Page;
