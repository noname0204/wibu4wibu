import type { FC } from 'react';
import Paragraph from '~/components/Paragraph';
import Search from './Search';
import Avatar from './Avatar';
import NotificationBell from './NotificationBell';
import classes from './styles/Header.module.scss';

const Header: FC = () => {
  return (
    <header className={classes.wrapper}>
      <Paragraph size={5} className={classes.title}>
        MyanimeworldZ&nbsp;
        {/* &nbsp; dùng để đặt thêm khoảng cách ở cuối chữ để fix lỗi của font */}
      </Paragraph>
      <Search />
      <div className='ml-16 flex items-center gap-5'>
        <NotificationBell />
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
