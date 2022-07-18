import type { FC, PropsWithChildren } from 'react';
import bgImg from '~/assets/blobscene.svg';

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className='inline-flex h-screen w-screen items-center justify-center bg-cover bg-no-repeat'
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {children}
    </div>
  );
};

export default AuthLayout;
