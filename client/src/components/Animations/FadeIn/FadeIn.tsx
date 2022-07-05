import type { FC, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

interface FadeInProps extends PropsWithChildren {
  from?: 'top' | 'bottom' | 'left' | 'right';
  duration?: number;
}

const FadeIn: FC<FadeInProps> = ({ from, duration = 0.5, children }) => {
  return (
    <motion.div
      initial={from ? { [from]: '-100px', opacity: 0 } : { opacity: 0 }}
      animate={from ? { [from]: 0, opacity: 1 } : { opacity: 1 }}
      transition={{ default: { duration } }}
      className={classNames(from && 'relative')}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
