import type { FC } from 'react';
import NavLink from './NavLink';
import classes from './styles/Navbar.module.scss';

import ActionButton from './ActionButton';
import { AiFillHome, AiFillBook } from 'react-icons/ai';
import { IoMdFilm } from 'react-icons/io';
import { BsFillBookFill, BsMusicNote } from 'react-icons/bs';

const Navbar: FC = () => {
  return (
    <nav className={classes.wrapper}>
      <ActionButton />
      <NavLink to='/' label='Home' icon={AiFillHome} />
      <NavLink to='/' label='Anime' icon={IoMdFilm} />
      <NavLink to='/' label='Manga' icon={BsFillBookFill} />
      <NavLink to='/' label='Lightnovel' icon={AiFillBook} />
      <NavLink to='/' label='Chill Radio' icon={BsMusicNote} />
    </nav>
  );
};

export default Navbar;
