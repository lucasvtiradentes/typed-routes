import { TypedLink } from '@typed-routes/react';

export const HomePage = () => {
  return (
    <div>
      <TypedLink to="/logout">Logout</TypedLink>
      <TypedLink to="/app/dashboard">Logout</TypedLink>
      <span>HomePage</span>
    </div>
  );
};
