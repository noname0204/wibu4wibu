import type { FC, ButtonHTMLAttributes, MouseEventHandler } from 'react';
import classNames from 'classnames/bind';
import classes from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

const cx = classNames.bind(classes);
const Button: FC<ButtonProps> = ({
  fullWidth = false,
  disabled,
  className,
  onClick,
  children,
  ...buttonProps
}) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (onClick) onClick(e);

    const button = e.target as HTMLButtonElement;
    let posX = e.nativeEvent.offsetX;
    let posY = e.nativeEvent.offsetY;

    button.addEventListener(
      'animationend',
      () => {
        button.classList.remove(cx('pulse'));
        button.disabled = false;
      },
      { once: true }
    );

    if (!button.classList.contains(cx('pulse'))) {
      button.style.setProperty('--x', posX + 'px');
      button.style.setProperty('--y', posY + 'px');
    }

    button.classList.add(cx('pulse'));
  };

  return (
    <button
      className={cx(
        {
          button: true,
          'w-full': fullWidth,
          disabled: disabled,
        },
        className
      )}
      disabled={disabled}
      onClick={handleClick}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
