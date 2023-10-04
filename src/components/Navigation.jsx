import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import css from './../css/Navigation.module.css';
export const Naviagtion = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav className={css.navWrapper}>
      <NavLink activeClassName={css.active} to="/">
        Home
      </NavLink>
      {isLoggedIn ? (
        <NavLink
          activeClassName={css.active}
          className={css.navLinks}
          to="contacts"
        >
          Contacts
        </NavLink>
      ) : null}
    </nav>
  );
};
