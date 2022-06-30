import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import classes from './Paragraph.module.scss';

const cx = classNames.bind(classes);
const Paragraph = ({ variant = 'thin', size = 1, children }) => {
  return (
    <div
      className={cx(
        'paragraph',
        `paragraph-${variant}`,
        `paragraph-size-${size <= 6 ? size : 6}`
      )}
    >
      {children}
    </div>
  );
};

Paragraph.propTypes = {
  variant: PropTypes.oneOf(['thin', 'medium', 'bold']),
  size: PropTypes.number,
  children: PropTypes.node,
};

export default Paragraph;
