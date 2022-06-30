import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import classes from './Divider.module.scss';
import { When } from 'react-if';

const cx = classNames.bind(classes);
const Divider = ({ label }) => {
  return (
    <div className={cx('divider')}>
      <When condition={label}>
        <span className={cx('label')}>{label}</span>
      </When>
    </div>
  );
};

Divider.propTypes = {
  label: PropTypes.string,
};

export default Divider;
