import type { FC, PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import classes from './Paragraph.module.scss';

interface ParagraphProps extends PropsWithChildren {
  fontStyle?: 'thin' | 'medium' | 'semibold' | 'bold';
  size?: number;
  color?: string;
}

const cx = classNames.bind(classes);
const Paragraph: FC<ParagraphProps> = ({
  fontStyle = 'medium',
  size = 1,
  color,
  children,
}) => {
  return (
    <div
      className={cx('paragraph', `style-${fontStyle}`, `size-${size}`)}
      style={{ color }}
    >
      {children}
    </div>
  );
};

export default Paragraph;
