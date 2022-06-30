import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import classes from './Form.module.scss';

const cx = classNames.bind(classes);
const Form = ({ width, children }) => {
  return (
    <div className={cx('form')} style={{ width: `min(${width ?? '25rem'}, 95%)` }}>
      {children}
    </div>
  );
};

Form.propTypes = {
  children: PropTypes.node,
};

export default Form;
