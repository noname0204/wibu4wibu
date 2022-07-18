import type { FC, ChangeEventHandler } from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';
import classes from './styles/Search.module.scss';
import { BiSearchAlt2 } from 'react-icons/bi';
import { MdCancel } from 'react-icons/md';

const cx = classNames.bind(classes);
const Search: FC = () => {
  const [value, setValue] = useState<string>('');

  const handleChange: ChangeEventHandler = (e) => {
    const searchValue = (e.target as HTMLInputElement).value;
    if (searchValue.startsWith(' ')) return;

    setValue(searchValue);
  };

  return (
    <div className={cx('wrapper')}>
      {value && <MdCancel className={cx('clear-btn')} onClick={() => setValue('')} />}
      <input
        value={value}
        onChange={handleChange}
        className={cx('search-input')}
        placeholder='Search anime, manga, lightnovel, ...'
        spellCheck={false}
      />
      <BiSearchAlt2 size={20} className={cx('search-icon', value && '!fill-slate-600')} />
    </div>
  );
};

export default Search;
