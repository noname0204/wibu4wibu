import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import classes from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(classes);
const Button = ({
  to,
  href,
  fullWidth = false,
  disabled = false,
  className,
  onClick,
  children,
}) => {
  let Comp = 'button';
  const props = {};

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const handleClick = (e) => {
    if (onClick) onClick();

    const button = e.target;
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
    <Comp
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
      {...props}
    >
      {children}
    </Comp>
  );
};

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
};

export default Button;
