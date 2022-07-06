import type { FC } from 'react';
import Paragraph from '~/components/Paragraph';
import Search from './Search';
import Avatar from './Avatar';
import NotificationBell from './NotificationBell';
import classes from './styles/Header.module.scss';
import MobileMenu from './MobileMenu';

const Header: FC = () => {
  return (
    <header className={classes.wrapper}>
      <div>
        <Paragraph size={5} className={classes.title}>
          MyanimeworldZ&nbsp;
          {/* &nbsp; dùng để đặt thêm khoảng cách ở cuối chữ để fix lỗi của font */}
        </Paragraph>
        <MobileMenu />
      </div>
      <Search />
      <div className='ml-0 flex items-center gap-5 lg:ml-16 '>
        <NotificationBell />
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
