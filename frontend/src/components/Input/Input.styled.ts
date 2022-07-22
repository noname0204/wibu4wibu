import styled, { css } from 'styled-components';

interface ContainerProps {
  fullWidth?: boolean;
  marginBottom?: string;
}

interface StyledProps {
  error?: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${(p) =>
    p.fullWidth &&
    css`
      width: 100%;
    `}
  margin-bottom: ${(p) => p.marginBottom || 0};
`;

export const StyledLabel = styled.label<StyledProps>`
  font-size: 1rem;

  ${(p) =>
    p.error &&
    css`
      color: ${(p) => p.theme.color.red[5]};
    `}
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-top: 0.25rem;
`;

export const StyledInput = styled.input<StyledProps>`
  width: 100%;
  padding: 0.75rem;
  font-size: 1.125rem;

  border-radius: 0.5rem;
  border-width: 1px;
  border-style: solid;

  ${(p) =>
    p.error
      ? css`
          border-color: ${(p) => p.theme.color.red[5]};
          color: ${(p) => p.theme.color.red[4]};
          &:focus {
            border-color: ${(p) => p.theme.color.red[5]};
            outline: ${(p) => p.theme.color.red[4]} solid 2px;
          }
          ::placeholder {
            color: ${(p) => p.theme.color.red[4]};
          }
        `
      : css`
          border-color: ${(p) => p.theme.color.gray[4]};
          &:focus {
            border-color: ${(p) => p.theme.color.blue[6]};
            outline: ${(p) => p.theme.color.blue[5]} solid 2px;
          }
        `}
`;

export const IconWrapper = styled.span<StyledProps>`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 1rem;

  display: inline-flex;
  align-items: center;

  & > svg {
    cursor: pointer;

    ${(p) =>
      p.error
        ? css`
            fill: ${p.theme.color.red[5]};
          `
        : css`
            fill: ${p.theme.color.gray[4]};
          `}
  }
`;

export const ErrorLabel = styled.label`
  padding-left: 0.5rem;
  font-size: 0.85rem;
  color: ${(p) => p.theme.color.red[5]};
`;
