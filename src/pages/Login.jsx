import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
export const Login = () => {
  return (
    <main>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm></LoginForm>
    </main>
  );
};
