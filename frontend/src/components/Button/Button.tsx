import type { FC, ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { Ripple } from '../Animations';

interface StyledButtonProps {
  fullWidth?: boolean;
  styleLess?: boolean;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  styleLess?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  outline: none;
  ${(p) =>
    p.fullWidth &&
    css`
      width: 100%;
    `}

  ${(p) =>
    !p.styleLess &&
    css`
      isolation: isolate;
      border-radius: 0.5rem;
      padding: 1rem;
      color: ${(p) => p.theme.color.white};
      background-color: ${(p) => p.theme.color.blue[6]};
    `}

  ${(p) =>
    !p.styleLess &&
    p.disabled &&
    css`
      cursor: not-allowed;
      background-color: ${(p) => p.theme.color.blue[5]};
    `}
`;

const Button: FC<ButtonProps> = ({
  fullWidth = false,
  styleLess = false,
  className,
  onClick,
  children,
  ...buttonProps
}) => {
  return (
    <StyledButton
      fullWidth={fullWidth}
      styleLess={styleLess}
      className={className}
      onClick={onClick}
      {...buttonProps}
    >
      {children}
      <Ripple />
    </StyledButton>
  );
};

export default Button;
