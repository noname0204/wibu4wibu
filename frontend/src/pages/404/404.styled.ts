import styled from 'styled-components';
import Button from '~/components/Button';
import { Paragraph } from '~/components/Styled';

export const Container = styled.div`
  height: 100%;
  display: grid;
  place-content: center;
  padding: 4rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto 2rem;
  padding: 1.25rem 0;
  max-width: 640px;

  @media ${(p) => p.theme.breakpoints.md} {
    max-width: 768px;
  }

  @media ${(p) => p.theme.breakpoints.lg} {
    max-width: 1280px;
  }
`;

export const Content = styled.div`
  text-align: center;
  max-width: 32rem;
`;

export const ErrorCode = styled.h2`
  height: 10rem;
  color: #2b8eff;
  font-size: 9rem;
  font-weight: ${(p) => p.theme.fontWeight.bold};
`;

export const Title = styled(Paragraph)`
  color: ${(p) => p.theme.color.gray[6]};
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const StyledButton = styled(Button)`
  border-radius: 999px;
  font-weight: ${(p) => p.theme.fontWeight.bold};
`;
