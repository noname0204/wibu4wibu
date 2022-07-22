import styled from 'styled-components';

interface Props {
  width?: number | string;
}

const StyledForm = styled.form<Props>`
  position: relative;
  width: ${(p) => p.width || '27rem'};
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  padding: 1.25rem;
  border-radius: 0.25rem;

  background-color: ${(p) => p.theme.color.white};
  color: ${(p) => p.theme.color.gray[7]};
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
`;

export default StyledForm;
