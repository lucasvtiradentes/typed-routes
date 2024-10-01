import { TypedLink } from '@typed-routes/react';

export const HomePage = () => {
  return (
    <div>
      <TypedLink to="/app/about">About</TypedLink>
      <TypedLink to="/app/dashboard">Dashboard</TypedLink>
      <span>HomePage</span>
    </div>
  );
};
