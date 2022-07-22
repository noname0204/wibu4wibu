import styled, { keyframes } from 'styled-components';

export interface LoadingSpinnerProps {
  size: number;
}

const spinner = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingWrapper = styled.div<LoadingSpinnerProps>`
  display: inline-block;
  position: relative;
  width: ${(p) => p.size * 20 + 'px'};
  aspect-ratio: 1 / 1;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    animation: ${spinner} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

    border: 10px solid;
    border-radius: 50%;
    border-top-color: ${(p) => p.theme.color.blue[5]};
    border-left-color: transparent;
    border-bottom-color: transparent;
    border-right-color: transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;
