import { StyledLink } from 'styledTags';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.AuthNavWrap}>
      <StyledLink to="register">Register</StyledLink>
      <StyledLink to="login">Login</StyledLink>
    </div>
  );
};
