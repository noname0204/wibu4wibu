import type { FC, MouseEventHandler } from 'react';
import type { IconType } from 'react-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import classes from './styles/ItemLink.module.scss';
import { Ripple } from '../Animations';

interface ItemProps {
  to: string;
  label: string;
  icon: IconType;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const cx = classNames.bind(classes);
const ItemLink: FC<ItemProps> = ({ to, label, icon: Icon, onClick }) => {
  return (
    <Link to={to} className={cx('link-wrapper')} onClick={onClick}>
      <Icon className={cx('link-icon')} />
      <span className={cx('link-label')}>{label}</span>
      <Ripple />
    </Link>
  );
};

export default ItemLink;