import css from '../css/AuthNav.module.css';
import { StyledLink } from './Navigation';
export const AuthNav = () => {
  return (
    <div className={css.AuthNavWrap}>
      <StyledLink to="register">Register</StyledLink>
      <StyledLink to="login">Login</StyledLink>
    </div>
  );
};
