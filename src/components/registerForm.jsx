import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operations';
import css from '../css/RegisterForm.module.css';
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      registerUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <main>
      <h2>Register</h2>
      <form className={css.registerForm} onSubmit={handleSubmit}>
        <label>
          Name
          <input type="name" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button>Register</button>
      </form>
    </main>
  );
};
