import type { FC, ButtonHTMLAttributes, MouseEventHandler } from 'react';
import classNames from 'classnames/bind';
import classes from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

const cx = classNames.bind(classes);
const Button: FC<ButtonProps> = ({
  fullWidth = false,
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
      },
      { once: true }
    );

    if (!button.classList.contains(cx('pulse'))) {
      if (posX && posY) {
        button.style.setProperty('--x', posX + 'px');
        button.style.setProperty('--y', posY + 'px');
      } else {
        button.style.setProperty('--x', '50%');
        button.style.setProperty('--y', '50%');
      }
    }

    button.classList.add(cx('pulse'));
  };

  return (
    <button
      className={cx(className, {
        button: true,
        'w-full': fullWidth,
        disabled: buttonProps.disabled,
      })}
      onClick={handleClick}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
