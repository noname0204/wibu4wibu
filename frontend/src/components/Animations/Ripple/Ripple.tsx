import type { FC, MouseEventHandler } from 'react';

import { useState, useEffect, createRef } from 'react';
import { useDebouncedRippleCleanUp } from '~/hooks';
import { RippleContainer, RippleEffect } from './Ripple.styled';

interface RippleProps {
  duration?: number;
}

interface RipplePosition {
  x: number;
  y: number;
}

const Ripple: FC<RippleProps> = ({ duration = 500 }) => {
  const [rippleArray, setRippleArray] = useState<RipplePosition[]>([]);
  const rippleRef = createRef<HTMLDivElement>();
  useDebouncedRippleCleanUp(rippleArray.length, duration, () => setRippleArray([]));

  const handleAddRipple: MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);

    setRippleArray([...rippleArray, { x, y }]);
  };

  // Add require style to the parent element to make sure the ripple effect works
  useEffect(() => {
    const rippleParent = rippleRef.current?.parentElement;
    if (!rippleParent) return;
    rippleParent.style.position = 'relative';
    rippleParent.style.overflow = 'hidden';
  }, [rippleRef]);

  return (
    <RippleContainer ref={rippleRef} onClick={handleAddRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => (
          <RippleEffect key={index} x={ripple.x} y={ripple.y} duration={duration} />
        ))}
    </RippleContainer>
  );
};

export default Ripple;
