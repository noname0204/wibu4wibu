import type { FC, PropsWithChildren } from 'react';
import { Header, Navbar } from '../components';

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex h-full flex-col gap-2'>
      <Header />
      <div className='mx-3 flex h-full gap-3'>
        <Navbar />
        <div className='w-full'>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
