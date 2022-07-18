import type { FC } from 'react';
import classNames from 'classnames/bind';
import { IoMdMenu } from 'react-icons/io';
import Button from '~/components/Button';
import classes from './MobileMenu.module.scss';

const cx = classNames.bind(classes);
const MobileMenuShowButton: FC = () => {
  return (
    <div className={cx('show-btn-wrapper')}>
      <Button styleLess className={cx('show-btn')}>
        <IoMdMenu size={30} className='fill-gray-400' />
      </Button>
    </div>
  );
};

export default MobileMenuShowButton;
