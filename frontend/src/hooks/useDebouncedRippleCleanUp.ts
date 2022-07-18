import { useLayoutEffect } from 'react';

const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: Function
) => {
  useLayoutEffect(() => {
    let bounce: number | undefined;
    if (rippleCount > 0) {
      if (bounce) window.clearTimeout(bounce);

      bounce = window.setTimeout(() => {
        cleanUpFunction();
        if (bounce) window.clearTimeout(bounce);
      }, duration);
    }

    return () => {
      if (bounce) return clearTimeout(bounce);
    };
  }, [rippleCount, duration, cleanUpFunction]);
};

export default useDebouncedRippleCleanUp;
