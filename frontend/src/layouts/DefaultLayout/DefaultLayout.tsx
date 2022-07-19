import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Navbar } from '../components';

const DefaultLayout: FC = () => {
  return (
    <div className='flex h-full flex-col gap-2'>
      <Header />
      <div className='mx-3 flex h-full gap-3'>
        <Navbar />
        <div className='w-full'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
