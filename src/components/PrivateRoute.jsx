import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isloggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isloggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component; 
};
