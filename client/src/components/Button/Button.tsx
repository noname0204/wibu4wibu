import type { FC, ButtonHTMLAttributes, MouseEventHandler } from 'react';
import classNames from 'classnames/bind';
import classes from './Button.module.scss';

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
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (onClick) onClick(e);

    const target = e.target as HTMLElement;
    const button = target.closest(`.${cx('button')}`) as HTMLButtonElement;
    const rect = button.getBoundingClientRect();
    let posX = Math.round(e.clientX - rect.left);
    let posY = Math.round(e.clientY - rect.top);

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
        ripple: true,
        'default-style': !styleLess,
        'w-full': fullWidth,
        disabled: buttonProps.disabled && !styleLess,
      })}
      onClick={handleClick}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
