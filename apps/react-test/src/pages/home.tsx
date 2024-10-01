import { TypedLink, useTypedNavigate } from '@typed-routes/react';
import { Link, useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const { typedNavigate } = useTypedNavigate();
  const navigate = useNavigate();

  const handleTeste = () => {
    typedNavigate({ href: '/app/about', searchParams: { date: '' } }, {});
    navigate('/app/about', {});
  };

  return (
    <div>
      <button onClick={handleTeste}></button>
      -------------
      <Link to="/app/about">About</Link>
      <TypedLink to="/app/about" searchParams={{}}>
        About
      </TypedLink>
      -------------
      <Link to="/app/dashboard">Dashboard</Link>
      <TypedLink to="/app/dashboard" params={{ color: 'red', title: 'test' }}>
        Dashboard
      </TypedLink>
      <span>HomePage</span>
    </div>
  );
};
