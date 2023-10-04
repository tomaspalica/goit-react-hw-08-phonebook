import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Link, Outlet } from 'react-router-dom';
import { Naviagtion } from 'components/Navigation';
import css from '../css/sharedLayout.module.css';
export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <header className={css.navHeader}>
        <Naviagtion />
        {isLoggedIn ? <UserMenu className={css.userMenu} /> : <AuthNav />}
      </header>
      <Outlet />
    </>
  );
};
