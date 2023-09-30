import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Naviagtion = () => {
  const { isloggedIn } = useAuth();
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isloggedIn ? <NavLink to="contacts">Contacts</NavLink> : null}
    </nav>
  );
};
