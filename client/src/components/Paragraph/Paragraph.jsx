import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import classes from './Paragraph.module.scss';

const cx = classNames.bind(classes);
const Paragraph = ({ variant = 'medium', size = 1, color, children }) => {
  return (
    <div
      className={cx(
        'paragraph',
        `paragraph-${variant}`,
        `paragraph-size-${size <= 7 ? size : 7}`
      )}
      style={{
        color: color,
      }}
    >
      {children}
    </div>
  );
};

Paragraph.propTypes = {
  variant: PropTypes.oneOf(['thin', 'medium', 'semibold', 'bold']),
  size: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node,
};

export default Paragraph;
