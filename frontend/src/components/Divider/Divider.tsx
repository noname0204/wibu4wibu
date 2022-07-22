import type { FC } from 'react';
import { Wrapper, Label } from './Divider.styled';

interface DividerProps {
  label?: string;
}

const Divider: FC<DividerProps> = ({ label }) => {
  return <Wrapper>{label && <Label>{label}</Label>}</Wrapper>;
};

export default Divider;
