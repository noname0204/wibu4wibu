import type { FC, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import classes from './Button.module.scss';
import { Ripple } from '../Animations';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  styleLess?: boolean;
}

const cx = classNames.bind(classes);
const Button: FC<ButtonProps> = ({
  fullWidth = false,
  styleLess = false,
  className,
  onClick,
  children,
  ...buttonProps
}) => {
  return (
    <button
      className={cx('outline-none', className, {
        button: !styleLess,
        'w-full': fullWidth,
        disabled: buttonProps.disabled && !styleLess,
      })}
      onClick={onClick}
      {...buttonProps}
    >
      {children}
      <Ripple />
    </button>
  );
};

export default Button;
