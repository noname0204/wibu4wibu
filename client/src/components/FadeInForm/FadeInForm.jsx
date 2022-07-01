import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import classes from './FadeInForm.module.scss';
import { motion } from 'framer-motion';

const cx = classNames.bind(classes);
const FadeInForm = ({ width, children, ...formProps }) => {
  return (
    <motion.form
      initial={{ top: '100px', opacity: 0 }}
      animate={{ top: 0, opacity: 1 }}
      transition={{ default: { duration: 0.5 } }}
      className={cx('form')}
      style={{ width: `min(${width ?? '25rem'}, 95vw)` }}
      {...formProps}
    >
      {children}
    </motion.form>
  );
};

FadeInForm.propTypes = {
  children: PropTypes.node,
};

export default FadeInForm;
