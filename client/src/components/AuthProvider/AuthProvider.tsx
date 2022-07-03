import type { FC, PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '~/hooks';

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { currentUser } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!currentUser && !['/login', '/register'].includes(pathname)) {
      return navigate('/login');
    }

    if (currentUser && ['/login', '/register'].includes(pathname)) {
      return navigate('/');
    }
  }, [currentUser, navigate, pathname]);

  return <>{children}</>;
};

export default AuthProvider;
