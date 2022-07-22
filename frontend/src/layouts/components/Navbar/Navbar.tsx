import type { FC } from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';
import ActionButton from './ActionButton';
import { AiFillHome, AiFillBook } from 'react-icons/ai';
import { IoMdFilm } from 'react-icons/io';
import { BsFillBookFill, BsMusicNote } from 'react-icons/bs';

const Wrapper = styled.div`
  display: none;
  min-width: 90px;
  height: 100%;

  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  padding-top: 0.8rem;
  margin-left: -0.75rem;

  @media ${(p) => p.theme.breakpoints.lg} {
    display: flex;
  }
`;

const Navbar: FC = () => {
  return (
    <Wrapper>
      <ActionButton />
      <NavLink to='/' label='Home' icon={AiFillHome} />
      <NavLink to='/' label='Anime' icon={IoMdFilm} />
      <NavLink to='/' label='Manga' icon={BsFillBookFill} />
      <NavLink to='/' label='Lightnovel' icon={AiFillBook} />
      <NavLink to='/' label='Chill Radio' icon={BsMusicNote} />
    </Wrapper>
  );
};

export default Navbar;
