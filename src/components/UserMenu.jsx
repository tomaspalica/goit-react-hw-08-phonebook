import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import css from '../css/UserMenu.module.css';
import { StyledButton } from 'css/styledTags';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.userMenuWrap}>
      <p>welcome, {user.name}</p>
      <StyledButton type="button" onClick={handleLogout}>
        Logout
      </StyledButton>
    </div>
  );
};
