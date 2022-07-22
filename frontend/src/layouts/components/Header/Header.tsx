import type { FC } from 'react';
import styled from 'styled-components';
import Search from './Search';
import { Avatar } from '../Avatar';
import NotificationBell from './NotificationBell';
import { MobileMenuShowButton } from '../MobileMenu';
import SearchButton from './SearchButton';
import Logo from './Logo';

const HeaderContainer = styled.header`
  max-height: 65px;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${(p) => p.theme.color.gray[3]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-left: 0;

  @media ${(p) => p.theme.breakpoints.lg} {
    margin-left: 4rem;
  }
`;

const Header: FC = () => {
  return (
    <HeaderContainer>
      <Logo />
      <MobileMenuShowButton />
      <Search />
      <ActionWrapper>
        <SearchButton />
        <NotificationBell />
        <Avatar />
      </ActionWrapper>
    </HeaderContainer>
  );
};

export default Header;
