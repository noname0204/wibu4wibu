import type { FC } from 'react';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '~/hooks';
import { setUser, logOut } from '~/store/reducers/user';
import { selectCurrentUser } from '~/store/reducers/user';
import { useRefreshMutation } from '~/api/authApi';
import { Outlet } from 'react-router-dom';
import { LoadingSpinner } from '~/components/LoadingSpinner';

const authRoutes = ['/login', '/register'];
const AuthNavigate: FC = () => {
  const user = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [refresh, { isLoading }] = useRefreshMutation();
  const dispatch = useAppDispatch();

  // Get user data with access token on load page
  useEffect(() => {
    (async () => {
      try {
        const user = await refresh().unwrap();
        dispatch(setUser(user));
      } catch (error) {
        dispatch(logOut());
      }
    })();
  }, []); // eslint-disable-line

  useEffect(() => {
    // If user isn't logged in, auto navigate to /login
    if (!user && !authRoutes.includes(pathname)) {
      return navigate('/login');
    }

    // If user is logged in, auto navigate / when user move to authRoutes
    if (user && authRoutes.includes(pathname)) {
      return navigate('/');
    }
  }, [user, pathname]); // eslint-disable-line

  if (isLoading) {
    return (
      <div className='grid h-full w-full place-content-center'>
        <LoadingSpinner size={7} />
      </div>
    );
  }

  return <Outlet />;
};

export default AuthNavigate;
