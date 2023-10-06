import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import css from './../css/Navigation.module.css';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  height: 55px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    background-color: bisque;
    border-radius: 50% 20% / 10% 40%;
  }
`;

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
