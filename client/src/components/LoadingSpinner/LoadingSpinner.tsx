import type { FC } from 'react';

import classes from './LoadingSpinner.module.scss';

interface LoadingSpinnerProps {
  size?: number;
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({ size = 3 }) => {
  return (
    <div className={classes.loader} style={{ width: size * 20, height: size * 20 }}>
      {Array(4)
        .fill(0)
        .map((value, index) => (
          <div key={index} style={{ width: size * 20, height: size * 20 }}></div>
        ))}
    </div>
  );
};

export default LoadingSpinner;
