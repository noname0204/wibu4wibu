import { forwardRef, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import classes from './Input.module.scss';
import { When } from 'react-if';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const cx = classNames.bind(classes);
const Input = forwardRef(
  (
    {
      fullWidth = false,
      label,
      type = 'text',
      error = false,
      errorMessage,
      ...inputProps
    },
    ref
  ) => {
    const [visible, setVisible] = useState(type !== 'password');
    const EyeIcon = useMemo(() => (visible ? AiFillEyeInvisible : AiFillEye), [visible]);

    const handleEyeClick = () => {
      setVisible(!visible);
    };

    return (
      <div className={cx(fullWidth && 'w-full', error && errorMessage && '-mb-2')}>
        <label className={cx('base-label', error && 'error-label')}>{label}</label>
        <div className='relative mt-1'>
          <input
            className={cx('base-input', error ? 'error-input' : 'default-input')}
            placeholder={`Enter ${label}`}
            type={visible ? 'text' : 'password'}
            ref={ref}
            {...inputProps}
          />
          <When condition={type === 'password'}>
            <span className='absolute inset-y-0 right-4 inline-flex items-center'>
              <EyeIcon
                className={cx(
                  'base-eye-icon',
                  error ? 'error-eye-icon' : 'default-eye-icon'
                )}
                onClick={handleEyeClick}
              />
            </span>
          </When>
        </div>
        <When condition={error && errorMessage}>
          <label className='pl-2 text-sm text-red-500'>{errorMessage}</label>
        </When>
      </div>
    );
  }
);

Input.propTypes = {
  fullWidth: PropTypes.bool,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password']),
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default Input;
