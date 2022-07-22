import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;

  &::before,
  &::after {
    content: '';
    flex-grow: 1;
    border-top: solid 1px ${(p) => p.theme.color.gray[4]};
  }
`;

export const Label = styled.span`
  flex-shrink: 1;
  margin-left: 1rem;
  margin-right: 1rem;
  color: ${(p) => p.theme.color.gray[7]};
`;
