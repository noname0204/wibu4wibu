import styled from 'styled-components';

interface ParagraphProps {
  fontStyle?: 'light' | 'medium' | 'semibold' | 'bold';
  size?: number;
  color?: string;
}

export const Paragraph = styled.p<ParagraphProps>`
  text-align: center;
  color: inherit;
  text-align: center;

  font-size: ${(p) => p.size! + 'rem'};
  font-weight: ${(p) => p.theme.fontWeight[p.fontStyle!]};
`;

Paragraph.defaultProps = {
  fontStyle: 'medium',
  size: 1,
};

export default Paragraph;
