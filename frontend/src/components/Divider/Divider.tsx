import type { FC } from 'react';
import classNames from 'classnames/bind';
import classes from './Divider.module.scss';

interface DividerProps {
  label?: string;
}

const cx = classNames.bind(classes);
const Divider: FC<DividerProps> = ({ label }) => {
  return (
    <div className={cx('divider')}>
      {label && <span className={cx('label')}>{label}</span>}
    </div>
  );
};

export default Divider;
