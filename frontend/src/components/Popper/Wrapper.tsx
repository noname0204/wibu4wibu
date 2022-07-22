import styled from 'styled-components';

interface WrapperProps {
  width?: string;
}

const Wrapper = styled.div<WrapperProps>`
  width: ${(p) => (p.width ? p.width : 'auto')};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  border-radius: 0.4rem;
  background-color: white;
  padding: 0.75rem 0;
`;

export default Wrapper;
