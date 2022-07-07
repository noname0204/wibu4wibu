import type { FC } from 'react';
import Paragraph from '~/components/Paragraph';
import Search from './Search';
import Avatar from './Avatar';
import NotificationBell from './NotificationBell';
import { MobileMenuShowButton } from '../MobileMenu';
import SearchButton from './SearchButton';
import classes from './styles/Header.module.scss';

const Header: FC = () => {
  return (
    <header className={classes.wrapper}>
      <Paragraph size={5} className={classes.title}>
        WibuForWibu&nbsp;
        {/* &nbsp; dùng để đặt thêm khoảng cách ở cuối chữ để fix lỗi của font */}
      </Paragraph>
      <MobileMenuShowButton />
      <Search />
      <div className='ml-0 flex items-center gap-5 lg:ml-16 '>
        <SearchButton />
        <NotificationBell />
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
