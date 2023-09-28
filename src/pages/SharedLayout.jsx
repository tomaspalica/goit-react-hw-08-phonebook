import { Link, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/"> Home</Link>
          <Link to="contacts"> Contacts</Link>
          <Link to="login">Login</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
