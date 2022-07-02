import type { InputHTMLAttributes } from 'react';
import { forwardRef, useState, useMemo } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import classNames from 'classnames/bind';
import classes from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  label: string;
  error?: boolean;
  errorMessage?: string;
}

const cx = classNames.bind(classes);
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ fullWidth = false, label, error, errorMessage, type, ...inputProps }, ref) => {
    const [visible, setVisible] = useState<boolean>(type !== 'password');
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
            spellCheck={false}
            {...inputProps}
          />
          {type === 'password' && (
            <span className='absolute inset-y-0 right-4 inline-flex items-center'>
              <EyeIcon
                className={cx(
                  'base-eye-icon',
                  error ? 'error-eye-icon' : 'default-eye-icon'
                )}
                onClick={handleEyeClick}
              />
            </span>
          )}
        </div>
        {error && errorMessage && (
          <label className='pl-2 text-sm text-red-500'>{errorMessage}</label>
        )}
      </div>
    );
  }
);

export default Input;
