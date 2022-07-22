import type { FC } from 'react';
import styled, { css } from 'styled-components';
import { useState } from 'react';
import { Ripple } from '~/components/Animations';
import ActionMenu from './ActionMenu';
import { BsPlusLg } from 'react-icons/bs';

interface StyledProps {
  isMenuOpen: boolean;
}

const StyledButton = styled.button<StyledProps>`
  width: 50px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  display: grid;
  place-content: center;
  background-color: ${(p) => p.theme.color.blue[5]};

  ${(p) =>
    !p.isMenuOpen &&
    css`
      &:hover > svg {
        transform: scale(1.25);
      }
    `}
`;

const StyledIcon = styled(BsPlusLg)<StyledProps>`
  transition: transform 200ms;
  fill: white;

  ${(p) =>
    p.isMenuOpen &&
    css`
      transform: rotate(45deg) scale(1.25);
    `}
`;

const ActionButton: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleHideMenu = () => setIsMenuOpen(false);
  const handleShowMenu = () => setIsMenuOpen(true);

  return (
    <ActionMenu open={isMenuOpen} onClickOutSide={handleHideMenu}>
      <StyledButton
        isMenuOpen={isMenuOpen}
        onClick={isMenuOpen ? handleHideMenu : handleShowMenu}
      >
        <StyledIcon size={15} isMenuOpen={isMenuOpen} />
        <Ripple />
      </StyledButton>
    </ActionMenu>
  );
};

export default ActionButton;
