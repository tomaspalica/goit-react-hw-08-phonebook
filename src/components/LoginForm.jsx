import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.curentTarget;
    dispatch();
    // TODO: ad function
    form.reset();
  };

  return (
    <>
      <div>Login</div>
      <form>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button>Login</button>
      </form>
    </>
  );
};
