import type { FC } from 'react';
import classNames from 'classnames/bind';
import classes from './styles/NotificationBell.module.scss';
import { IoMdNotifications } from 'react-icons/io';
import Button from '~/components/Button';

const cx = classNames.bind(classes);
const NotificationBell: FC = () => {
  return (
    <Button styleLess className={cx('wrapper')}>
      <IoMdNotifications
        className={cx('icon')}
        onClick={() => console.log(1)}
        size={27}
      />
    </Button>
  );
};

export default NotificationBell;
