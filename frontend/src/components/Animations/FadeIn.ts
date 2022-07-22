import styled, { keyframes, css } from 'styled-components';

type StartPosition = 'top' | 'bottom' | 'left' | 'right';

interface FadeInProps {
  from?: StartPosition;
  lenght?: number;
  duration?: number;
}

const fadeInKeyframes = (from?: StartPosition, lenght?: number) => keyframes`
  from {
    opacity: 0;
    ${
      from &&
      lenght &&
      css`
        ${from}: ${-lenght + 'px'};
      `
    }
  }
  to {
    opacity: 1;
    ${
      from &&
      css`
        ${from}: 0;
      `
    }
  }
`;

const FadeIn = styled.div<FadeInProps>`
  ${(p) =>
    p.from &&
    css`
      position: relative;
    `}

  animation: ${(p) => fadeInKeyframes(p.from, p.lenght)} ${(p) => p.duration + 'ms'};
`;

FadeIn.defaultProps = {
  duration: 500,
  lenght: 100,
};

export default FadeIn;
