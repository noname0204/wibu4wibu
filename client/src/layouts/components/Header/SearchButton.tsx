import type { FC } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import classes from './styles/SearchButton.module.scss';

const cx = classNames.bind(classes);
const SearchButton: FC = () => {
  return (
    <Link to='/' className={cx('search-btn')}>
      <FaSearch size={22} className={cx('search-icon')} />
    </Link>
  );
};

export default SearchButton;
