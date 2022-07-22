import type { FC } from 'react';
import { LoadingWrapper } from './LoadingSpinner.styled';

interface LoadingSpinnerProps {
  size?: number;
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({ size = 3 }) => {
  return (
    <LoadingWrapper size={size}>
      {Array(4)
        .fill(0)
        .map((value, index) => (
          <div key={index} style={{ width: size * 20, height: size * 20 }}></div>
        ))}
    </LoadingWrapper>
  );
};

export default LoadingSpinner;
