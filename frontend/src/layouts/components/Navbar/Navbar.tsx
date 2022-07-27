import type { FC } from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';
import ActionButton from './ActionButton';
import {
  HomeIcon,
  BookIcon,
  FilmIcon,
  ShareIcon,
  OpenBookIcon,
  ChatIcon,
  MusicNoteIcon,
} from '~/components/Icons';

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
      <NavLink to='/' label='Home' icon={HomeIcon} />
      <NavLink to='/' label='Anime' icon={FilmIcon} />
      <NavLink to='/' label='Manga' icon={OpenBookIcon} />
      <NavLink to='/' label='Lightnovel' icon={BookIcon} />
      <NavLink to='/' label='Chat' icon={ChatIcon} />
      <NavLink to='/' label='Chill Radio' icon={MusicNoteIcon} />
      <NavLink to='/' label='Community' icon={ShareIcon} />
    </Wrapper>
  );
};

export default Navbar;
