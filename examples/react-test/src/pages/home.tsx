import { TypedLink, useTypedNavigate } from '@typed-routes/react';
import { Link, useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const { typedNavigate } = useTypedNavigate();
  const navigate = useNavigate();

  const handleTypesafeButton = () => {
    typedNavigate({ href: '/app/about', searchParams: { date: '' } }, {});
  };

  const handleDefaultButton = () => {
    navigate('/app/about', {});
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <button onClick={handleDefaultButton}>default button</button>
      <button onClick={handleTypesafeButton}>type safe button</button>
      <Link to="/app/about">About default</Link>
      <TypedLink href="/app/about" searchParams={{}}>
        About type-safe
      </TypedLink>
      <Link to="/app/dashboard">Dashboard default</Link>
      <TypedLink href="/app/dashboard" params={{ color: 'red', title: 'test' }}>
        Dashboard type-safe
      </TypedLink>
    </div>
  );
};
