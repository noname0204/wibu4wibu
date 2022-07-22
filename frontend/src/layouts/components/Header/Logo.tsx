import type { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoIcon from '~/assets/logo.png';

const StyledLink = styled(Link)`
  display: none;

  @media ${(p) => p.theme.breakpoints.lg} {
    display: block;
  }
`;

const StyledImage = styled.img`
  pointer-events: none;
  user-select: none;
`;

const Logo: FC = () => {
  return (
    <StyledLink to='/'>
      <StyledImage src={logoIcon} alt='logo' />
    </StyledLink>
  );
};

export default Logo;
