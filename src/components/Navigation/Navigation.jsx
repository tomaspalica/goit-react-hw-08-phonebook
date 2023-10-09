import { useAuth } from 'hooks/useAuth';
import css from './Navigation.module.css';
import { StyledLink } from 'styledTags';

export const Naviagtion = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav className={css.navWrapper}>
      <StyledLink activeClassName={css.active} to="/">
        Home
      </StyledLink>
      {isLoggedIn ? (
        <StyledLink
          activeClassName={css.active}
          className={css.navLinks}
          to="contacts"
        >
          Contacts
        </StyledLink>
      ) : null}
    </nav>
  );
};
