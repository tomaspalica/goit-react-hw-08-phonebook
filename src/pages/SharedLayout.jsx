import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Link, Outlet } from 'react-router-dom';
import { Naviagtion } from 'components/Navigation';
export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <header>
        <Naviagtion />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Outlet />
    </>
  );
};
