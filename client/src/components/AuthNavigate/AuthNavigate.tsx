import type { FC, PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '~/hooks';
import { useRefreshMutation } from '~/store/reducers/user';
import { LoadingSpinner } from '~/components/LoadingSpinner';

const AuthNavigate: FC<PropsWithChildren> = ({ children }) => {
  const currentUser = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [refresh, { isLoading, isError }] = useRefreshMutation();

  useEffect(() => {
    (async () => {
      await refresh();
    })();
  }, []); // eslint-disable-line

  useEffect(() => {
    if (isError && !['/login', '/register'].includes(pathname)) return navigate('/login');
  }, [isError]); // eslint-disable-line

  useEffect(() => {
    if (currentUser.accessToken && ['/login', '/register'].includes(pathname)) {
      return navigate('/');
    }
  }, [currentUser, pathname]); // eslint-disable-line

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
