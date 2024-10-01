import { TypedLink, useTypedNavigate } from '@typed-routes/react';

export const HomePage = () => {
  const { typedNavigate } = useTypedNavigate();

  const handleTeste = () => {
    typedNavigate({ path: '/app/about', searchParams: { date: '' } }, {});
  };

  return (
    <div>
      <button onClick={handleTeste}></button>
      <TypedLink to="/app/about" searchParams={{}}>
        About
      </TypedLink>
      <TypedLink to="/app/dashboard" params={{ color: 'red', title: 'test' }}>
        Dashboard
      </TypedLink>
      <span>HomePage</span>
    </div>
  );
};
