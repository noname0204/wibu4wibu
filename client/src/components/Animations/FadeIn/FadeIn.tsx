import type { FC, PropsWithChildren, CSSProperties } from 'react';
import classNames from 'classnames/bind';
import classes from './FadeIn.module.scss';

interface FadeInProps extends PropsWithChildren {
  from?: 'top' | 'bottom' | 'left' | 'right';
  lenght?: number;
  duration?: number;
}

const cx = classNames.bind(classes);
const FadeIn: FC<FadeInProps> = ({ from, duration = 0.5, lenght = 100, children }) => {
  return (
    <div
      className={cx(from && 'relative', from ? `fade-in-from-${from}` : `fade-in`)}
      style={
        { '--duration': `${duration}s`, '--lenght': `-${lenght}px` } as CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default FadeIn;
