import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Naviagtion = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn ? <NavLink to="contacts">Contacts</NavLink> : null}
    </nav>
  );
};
