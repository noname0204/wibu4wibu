import type { FC, FormHTMLAttributes } from 'react';
import classes from './Form.module.scss';

interface FormProps extends FormHTMLAttributes<{}> {
  width: string;
}

const Form: FC<FormProps> = ({ width, children, ...formProps }) => {
  return (
    <form
      style={{ width: width ?? '25rem', maxWidth: '95vw' }}
      className={classes.form}
      {...formProps}
    >
      {children}
    </form>
  );
};

export default Form;
