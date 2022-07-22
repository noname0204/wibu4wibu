import type { FC } from 'react';
import styled from 'styled-components';
import { useState } from 'react';

import AvatarActionMenu from './ActionMenu';
import AvatarImage from './AvatarImage';

const Wrapper = styled.div`
  display: none;

  @media ${(p) => p.theme.breakpoints.md} {
    display: block;
  }
`;

const Avatar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleHideMenu = () => setIsMenuOpen(false);
  const handleShowMenu = () => setIsMenuOpen(true);

  return (
    <Wrapper>
      <AvatarActionMenu open={isMenuOpen} onClickOutSide={handleHideMenu}>
        <div onClick={isMenuOpen ? handleHideMenu : handleShowMenu}>
          <AvatarImage />
        </div>
      </AvatarActionMenu>
    </Wrapper>
  );
};

export default Avatar;
