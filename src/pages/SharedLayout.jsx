import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Outlet } from 'react-router-dom';
import { Naviagtion } from 'components/Navigation/Navigation';

import styled from 'styled-components';

const SharedLayoutHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;
export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <SharedLayoutHeader>
        <Naviagtion />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </SharedLayoutHeader>
      <Outlet />
    </>
  );
};
