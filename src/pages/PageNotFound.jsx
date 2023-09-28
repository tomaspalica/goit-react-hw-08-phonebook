import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <>
      <Link to="/">
        <button>take me home</button>
      </Link>
      <div>Page Not Found</div>
    </>
  );
};
