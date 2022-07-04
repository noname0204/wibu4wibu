import type { FC } from 'react';
import classNames from 'classnames/bind';
import classes from './styles/Header.module.scss';
import Paragraph from '~/components/Paragraph';
import Search from './Search';
import Avatar from './Avatar';
import NotificationBell from './NotificationBell';

const cx = classNames.bind(classes);
const Header: FC = () => {
  return (
    <header className={cx('wrapper')}>
      <Paragraph size={5} className={cx('title')}>
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
