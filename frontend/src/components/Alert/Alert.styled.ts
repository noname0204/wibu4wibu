import styled, { css } from 'styled-components';
import { IoIosClose } from 'react-icons/io';

interface VarientProps {
  variant: 'default' | 'success' | 'warn' | 'error';
}

export const Wrapper = styled.div<VarientProps>`
  position: relative;
  width: 100%;
  padding: 1rem;

  border-radius: 0.125rem;
  border-left-style: solid;
  border-left-width: 4px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  ${(p) => {
    switch (p.variant) {
      case 'default':
        return css`
          border-color: ${(p) => p.theme.color.blue[5]};
          background-color: ${(p) => p.theme.color.blue[2]};
          color: ${(p) => p.theme.color.slate[8]};
        `;

      case 'success':
        return css`
          border-color: ${(p) => p.theme.color.emerald[5]};
          background-color: ${(p) => p.theme.color.emerald[2]};
          color: ${(p) => p.theme.color.emerald[6]};
        `;
      case 'warn':
        return css`
          border-color: ${(p) => p.theme.color.orange[5]};
          background-color: ${(p) => p.theme.color.orange[2]};
          color: ${(p) => p.theme.color.orange[6]};
        `;

      case 'error':
        return css`
          border-color: ${(p) => p.theme.color.red[5]};
          background-color: ${(p) => p.theme.color.red[2]};
          color: ${(p) => p.theme.color.red[6]};
        `;
    }
  }}
`;

export const Title = styled.p<VarientProps>`
  font-weight: bold;

  ${(p) => {
    switch (p.variant) {
      case 'default':
        return css`
          color: ${(p) => p.theme.color.emerald[6]};
        `;
      case 'success':
        return css`
          color: ${(p) => p.theme.color.emerald[6]};
        `;
      case 'warn':
        return css`
          color: ${(p) => p.theme.color.orange[7]};
        `;
      case 'error':
        return css`
          color: ${(p) => p.theme.color.red[7]};
        `;
    }
  }}
`;

export const CloseIcon = styled(IoIosClose)<VarientProps>`
  position: absolute;
  right: 0.25rem;
  top: 0.25rem;

  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;

  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: ${(p) => p.theme.color.white + p.theme.alpha[50]};
  }

  ${(p) => {
    switch (p.variant) {
      case 'default':
        return css`
          fill: ${(p) => p.theme.color.slate[9]};
        `;
      case 'success':
        return css`
          fill: ${(p) => p.theme.color.emerald[6]};
        `;
      case 'warn':
        return css`
          fill: ${(p) => p.theme.color.orange[7]};
        `;
      case 'error':
        return css`
          fill: ${(p) => p.theme.color.red[7]};
        `;
    }
  }}
`;
