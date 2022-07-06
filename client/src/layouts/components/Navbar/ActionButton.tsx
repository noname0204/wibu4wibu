import type { FC } from 'react';
import classes from './styles/ActionButton.module.scss';
import { BsPlusLg } from 'react-icons/bs';
import { Ripple } from '~/components/Animations';

const ActionButton: FC = () => {
  return (
    <button className={classes.button}>
      <BsPlusLg size={15} className={classes.icon} />
      <Ripple />
    </button>
  );
};

export default ActionButton;
