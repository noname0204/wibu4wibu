import type { FC, MouseEventHandler } from 'react';

import { useState } from 'react';
import { useDebouncedRippleCleanUp } from '~/hooks';
import classes from './Ripple.module.scss';

interface RippleProps {
  duration?: number;
}

interface RipplePosition {
  x: number;
  y: number;
}

/**
 * ! Warning: Make sure your wrapper have style "position: relative"
 */

const Ripple: FC<RippleProps> = ({ duration = 500 }) => {
  const [rippleArray, setRippleArray] = useState<RipplePosition[]>([]);
  useDebouncedRippleCleanUp(rippleArray.length, duration, () => setRippleArray([]));

  const handleAddRipple: MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);

    setRippleArray([...rippleArray, { x, y }]);
  };

  return (
    <div className={classes.wrapper} onClick={handleAddRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={index}
              style={{
                top: ripple.y,
                left: ripple.x,
                animationDuration: duration + 'ms',
              }}
            />
          );
        })}
    </div>
  );
};

export default Ripple;
