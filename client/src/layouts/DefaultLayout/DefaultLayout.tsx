import type { FC, PropsWithChildren } from 'react';
import { Fragment } from 'react';
import { Header, Navbar } from '../components';

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div className='mt-2 flex gap-3'>
        <Navbar />
        {children}
      </div>
    </Fragment>
  );
};

export default DefaultLayout;
