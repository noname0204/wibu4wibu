import type { FC } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import logoIcon from '~/assets/logo.png';
import classes from './styles/Header.module.scss';

const cx = classNames.bind(classes);
const Logo: FC = () => {
  return (
    <Link to='/' className={cx('logo-wrapper')}>
      <img className={cx('logo')} src={logoIcon} alt='logo' />
    </Link>
  );
};

export default Logo;
