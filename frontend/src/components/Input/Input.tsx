import type { InputHTMLAttributes } from 'react';
import { forwardRef, useState, useMemo, useId } from 'react';
import {
  Container,
  StyledLabel,
  InputWrapper,
  StyledInput,
  IconWrapper,
  ErrorLabel,
} from './Input.styled';
import { OpenEyeIcon, CloseEyeIcon } from '~/components/Icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  label: string;
  error?: boolean;
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ fullWidth = false, label, error, errorMessage, type, ...inputProps }, ref) => {
    const id = useId();
    const [visible, setVisible] = useState<boolean>(type !== 'password');
    const EyeIcon = useMemo(() => (visible ? OpenEyeIcon : CloseEyeIcon), [visible]);

    const handleEyeClick = () => {
      setVisible(!visible);
    };

    return (
      <Container fullWidth marginBottom={error && !!errorMessage ? '-0.5rem' : '0'}>
        <StyledLabel htmlFor={id} error={error}>
          {label}
        </StyledLabel>
        <InputWrapper>
          <StyledInput
            id={id}
            error={error}
            placeholder={`Enter ${label}`}
            type={visible ? 'text' : 'password'}
            ref={ref}
            spellCheck={false}
            {...inputProps}
          />
          {type === 'password' && (
            <IconWrapper error={error}>
              <EyeIcon onClick={handleEyeClick} />
            </IconWrapper>
          )}
        </InputWrapper>
        {error && errorMessage && <ErrorLabel htmlFor={id}>{errorMessage}</ErrorLabel>}
      </Container>
    );
  }
);

export default Input;
