import type { FC } from 'react';
import classNames from 'classnames/bind';
import classes from './styles/NotificationBell.module.scss';
import { IoMdNotifications } from 'react-icons/io';
import { Ripple } from '~/components/Animations';

const cx = classNames.bind(classes);
const NotificationBell: FC = () => {
  return (
    <div className={cx('wrapper')}>
      <IoMdNotifications className={cx('icon')} size={27} />
      <Ripple />
    </div>
  );
};

export default NotificationBell;
