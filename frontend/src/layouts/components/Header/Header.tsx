import type { FC } from 'react';
import Search from './Search';
import { Avatar } from '../Avatar';
import NotificationBell from './NotificationBell';
import { MobileMenuShowButton } from '../MobileMenu';
import SearchButton from './SearchButton';
import classes from './styles/Header.module.scss';
import Logo from './Logo';

const Header: FC = () => {
  return (
    <header className={classes.wrapper}>
      <Logo />
      <MobileMenuShowButton />
      <Search />
      <div className='ml-0 flex items-center gap-5 lg:ml-16 '>
        <SearchButton />
        <NotificationBell />
        <div className='hidden lg:block'>
          <Avatar />
        </div>
      </div>
    </header>
  );
};

export default Header;
