import type { FC } from 'react';
import { IoMdMenu } from 'react-icons/io';
import Button from '~/components/Button';
import classes from './styles/MobileMenu.module.scss';

const MobileMenu: FC = () => {
  return (
    <div className={classes.wrapper}>
      <Button styleLess className={classes.button}>
        <IoMdMenu size={30} className='fill-gray-400' />
      </Button>
    </div>
  );
};

export default MobileMenu;
