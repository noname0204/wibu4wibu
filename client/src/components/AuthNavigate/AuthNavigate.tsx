import type { FC, PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '~/hooks';
import { setUserAndAccessToken } from '~/store/reducers/user';
import { selectCurrentUser } from '~/store/reducers/user';
import { useRefreshMutation } from '~/api/authApi';
import { LoadingSpinner } from '~/components/LoadingSpinner';

const AuthNavigate: FC<PropsWithChildren> = ({ children }) => {
  const user = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [refresh, { isLoading, isError }] = useRefreshMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const user = await refresh().unwrap();
        dispatch(setUserAndAccessToken(user));
      } catch (error) {
        console.error(error);
      }
    })();
  }, []); // eslint-disable-line

  useEffect(() => {
    if (isError && !['/login', '/register'].includes(pathname)) return navigate('/login');
  }, [isError]); // eslint-disable-line

  useEffect(() => {
    if (user && ['/login', '/register'].includes(pathname)) {
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

  return <>{children}</>;
};

export default AuthNavigate;
