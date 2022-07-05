import type { FC } from 'react';
import classNames from 'classnames/bind';
import classes from './styles/NotificationBell.module.scss';
import { IoMdNotifications } from 'react-icons/io';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Ripple } from '~/components/Animations';

const cx = classNames.bind(classes);
const NotificationBell: FC = () => {
  return (
    <Tippy content='Notifications'>
      <div className={cx('wrapper')}>
        <IoMdNotifications
          className={cx('icon')}
          onClick={() => console.log('This is notifications log')}
          size={27}
        />
        <Ripple />
      </div>
    </Tippy>
  );
};

export default NotificationBell;
