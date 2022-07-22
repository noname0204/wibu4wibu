import type { FC } from 'react';
import type { IconType } from 'react-icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Ripple } from '~/components/Animations';

interface NavLinkProps {
  to: string;
  label: string;
  icon: IconType;
}

const StyledLink = styled(Link)`
  width: 75%;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 0.6rem;
  user-select: none;
  color: #404040;
  font-weight: ${(p) => p.theme.fontWeight.semibold};

  svg {
    fill: #404040;
  }

  &:hover {
    color: #1a1a1a;
    background-color: ${(p) => p.theme.color.gray[2]};

    svg {
      fill: #1a1a1a;
    }
  }
`;

const NavLink: FC<NavLinkProps> = ({ to, label, icon: Icon }) => {
  return (
    <StyledLink to={to}>
      <Icon size={25} />
      {label}
      <Ripple />
    </StyledLink>
  );
};

export default NavLink;
