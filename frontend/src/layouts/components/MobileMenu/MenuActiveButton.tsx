import type { FC } from 'react';
import styled from 'styled-components';
import { IoMdMenu } from 'react-icons/io';

const ButtonWrapper = styled.div`
  display: block;

  @media ${(p) => p.theme.breakpoints.lg} {
    display: none;
  }
`;

const StyledButon = styled.button`
  width: 50px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;

  display: grid;
  place-content: center;

  &:hover {
    background-color: ${(p) => p.theme.color.gray[1]};
  }
`;

const StyledIcon = styled(IoMdMenu)`
  fill: ${(p) => p.theme.color.gray[4]};
`;

const MobileMenuShowButton: FC = () => {
  return (
    <ButtonWrapper>
      <StyledButon>
        <StyledIcon size={30} />
      </StyledButon>
    </ButtonWrapper>
  );
};

export default MobileMenuShowButton;
