import type { FC, PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import classes from './Paragraph.module.scss';

interface ParagraphProps extends PropsWithChildren {
  fontStyle?: 'thin' | 'medium' | 'semibold' | 'bold';
  size?: number;
  color?: string;
  className?: string;
}

const cx = classNames.bind(classes);
const Paragraph: FC<ParagraphProps> = ({
  fontStyle = 'medium',
  size = 1,
  color,
  className = '',
  children,
  ...props
}) => {
  return (
    <p
      className={cx(
        'paragraph',
        `style-${fontStyle}`,
        `size-${size <= 7 ? size : 7}`,
        className
      )}
      style={{ color }}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
