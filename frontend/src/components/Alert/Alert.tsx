import type { FC, PropsWithChildren } from 'react';
import { IoIosClose } from 'react-icons/io';
import classNames from 'classnames/bind';
import classes from './Alert.module.scss';

interface AlertProps extends PropsWithChildren {
  title: string;
  variant?: 'default' | 'success' | 'warn' | 'error';
  className?: string;
  onCloseButtonClick?: VoidFunction;
  closeButton?: boolean;
}

const cx = classNames.bind(classes);
const Alert: FC<AlertProps> = ({
  title,
  variant = 'default',
  className,
  onCloseButtonClick: onClose,
  closeButton: close = false,
  children,
}) => {
  return (
    <div className={cx('wrapper', `wrapper-${variant}`, className)} role='alert'>
      <p className={cx('font-bold', `title-${variant}`)}>{title}</p>
      {close && (
        <IoIosClose
          className={cx('close-btn', `close-btn-${variant}`)}
          onClick={onClose}
        />
      )}
      {children}
    </div>
  );
};

export default Alert;
