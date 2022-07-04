import type { FC } from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';
import classes from './styles/Search.module.scss';
import { BiSearchAlt2 } from 'react-icons/bi';
import { MdCancel } from 'react-icons/md';

const cx = classNames.bind(classes);
const Search: FC = () => {
  const [value, setValue] = useState<string>('');

  return (
    <div className={cx('wrapper')}>
      {value && <MdCancel className={cx('clear-btn')} onClick={() => setValue('')} />}
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={cx('search-input')}
        placeholder='Search anime, manga, lightnovel, ...'
        spellCheck={false}
      />
      <BiSearchAlt2 size={20} className={cx('search-icon')} />
    </div>
  );
};

export default Search;
