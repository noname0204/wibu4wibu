import type { FC, PropsWithChildren } from 'react';
import './GlobalStyles.scss';

const GlobalStyles: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default GlobalStyles;
