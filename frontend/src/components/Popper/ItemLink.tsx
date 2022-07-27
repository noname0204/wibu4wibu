import type { FC, MouseEventHandler } from 'react';
import type { IconType } from 'react-icons';
import styled, { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';

interface ItemProps {
  to: string;
  label: string;
  icon: IconType;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  padding-left: 1rem;

  &:hover {
    background-color: ${(p) => p.theme.color.gray[2]};
  }
`;

const StyledLabel = styled.span`
  user-select: none;
  color: ${(p) => p.theme.color.gray[7]};
`;

const ItemLink: FC<ItemProps> = ({ to, label, icon: Icon, onClick }) => {
  const theme = useTheme();

  return (
    <StyledLink to={to} onClick={onClick}>
      <Icon fill={theme.color.gray[7]} />
      <StyledLabel>{label}</StyledLabel>
    </StyledLink>
  );
};

export default ItemLink;
