import { useLayoutEffect } from 'react';

const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: Function
) => {
  useLayoutEffect(() => {
    let bounce: number | null = null;
    if (rippleCount > 0) {
      if (bounce) clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        if (bounce) clearTimeout(bounce);
      }, duration * 4);
    }

    return () => {
      if (bounce) return clearTimeout(bounce);
    };
  }, [rippleCount, duration, cleanUpFunction]);
};

export default useDebouncedRippleCleanUp;