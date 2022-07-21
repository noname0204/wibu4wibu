import type { FC } from 'react';
import Paragraph from '~/components/Paragraph';
import Search from './Search';
import { Avatar } from '../Avatar';
import { Link } from 'react-router-dom';
import NotificationBell from './NotificationBell';
import { MobileMenuShowButton } from '../MobileMenu';
import SearchButton from './SearchButton';
import classes from './styles/Header.module.scss';

const Header: FC = () => {
  return (
    <header className={classes.wrapper}>
      <Link to='/' className={classes.title}>
        <Paragraph size={5}>WorldForWibu</Paragraph>
      </Link>
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
