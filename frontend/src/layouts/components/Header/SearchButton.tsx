import type { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SearchIcon } from '~/components/Icons';

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: center;
  width: 36px;
  aspect-ratio: 1 / 1;
  padding: 0.5rem;
  border-radius: 50%;

  &:hover {
    background-color: ${(p) => p.theme.color.gray[1]};
  }

  &:hover > .search-icon {
    fill: ${(p) => p.theme.color.gray[4] + p.theme.alpha[90]};
  }

  @media ${(p) => p.theme.breakpoints.md} {
    display: none;
  }
`;

const StyledIcon = styled(SearchIcon)`
  fill: ${(p) => p.theme.color.gray[3]};
`;

const SearchButton: FC = () => {
  return (
    <StyledLink to='/'>
      <StyledIcon size={22} />
    </StyledLink>
  );
};

export default SearchButton;
