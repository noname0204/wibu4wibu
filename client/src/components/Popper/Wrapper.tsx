import type { FC, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import classes from './styles/Wrapper.module.scss';

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
  width?: string | number;
}

const cx = classNames.bind(classes);
const Wrapper: FC<WrapperProps> = ({
  width,
  className,
  children,
  style,
  ...divProps
}) => {
  return (
    <div className={cx('wrapper', className)} style={{ width, ...style }} {...divProps}>
      {children}
    </div>
  );
};

export default Wrapper;
