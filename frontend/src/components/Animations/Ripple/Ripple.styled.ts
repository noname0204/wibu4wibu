import styled, { keyframes } from 'styled-components';

interface RippleProps {
  x: number;
  y: number;
  duration: number;
}

const ripple = keyframes`
  to {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.5);
  }
`;

export const RippleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const RippleEffect = styled.span<RippleProps>`
  position: absolute;
  top: ${(p) => p.y + 'px'};
  left: ${(p) => p.x + 'px'};

  width: 120%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;

  opacity: 0.75;
  transform: translate(-50%, -50%) scale(0);
  background-color: rgba(255, 255, 255, 0.6);
  animation: ${ripple} ${(p) => p.duration + 'ms'};
`;
