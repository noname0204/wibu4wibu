import type { FC } from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '~/hooks';
import { setUser, logOut } from '~/store/reducers/user';
import { selectCurrentUser } from '~/store/reducers/user';
import { useRefreshMutation } from '~/api/authApi';
import { LoadingSpinner } from '~/components/LoadingSpinner';

const LoaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;
`;

const authRoutes = ['/login', '/register'];
const AuthNavigate: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const user = useAppSelector(selectCurrentUser);
  const { pathname } = useLocation();
  const [refresh] = useRefreshMutation();
  const dispatch = useAppDispatch();

  // Get user data with access token on load page
  useEffect(() => {
    (async () => {
      try {
        const user = await refresh().unwrap();
        dispatch(setUser(user));
      } catch (error) {
        dispatch(logOut());
      } finally {
        setIsLoading(false);
      }
    })();
  }, []); // eslint-disable-line

  if (isLoading) {
    return (
      <LoaderWrapper>
        <LoadingSpinner size={7} />
      </LoaderWrapper>
    );
  }

  if (user && authRoutes.includes(pathname)) {
    return <Navigate to='/' />;
  } else if (!user && !authRoutes.includes(pathname)) {
    return <Navigate to='/login' />;
  }

  return <Outlet />;
};

export default AuthNavigate;
