import { StyledLink } from 'css/styledTags';
import css from '../css/AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.AuthNavWrap}>
      <StyledLink to="register">Register</StyledLink>
      <StyledLink to="login">Login</StyledLink>
    </div>
  );
};
