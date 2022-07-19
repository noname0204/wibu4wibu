import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import bgImg from '~/assets/blobscene.svg';

const AuthLayout: FC = () => {
  return (
    <div
      className='inline-flex h-screen w-screen items-center justify-center bg-cover bg-no-repeat'
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Outlet />
    </div>
  );
};

export default AuthLayout;
