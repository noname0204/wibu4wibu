import type { FC, PropsWithChildren } from 'react';
import { Wrapper, Title, CloseIcon } from './Alert.styled';

interface AlertProps extends PropsWithChildren {
  title: string;
  variant?: 'default' | 'success' | 'warn' | 'error';
  onCloseButtonClick?: VoidFunction;
  closeButton?: boolean;
}

const Alert: FC<AlertProps> = ({
  title,
  variant = 'default',
  onCloseButtonClick: onClose,
  closeButton: close = false,
  children,
}) => {
  return (
    <Wrapper variant={variant} role='alert'>
      <Title variant={variant}>{title}</Title>
      {close && <CloseIcon variant={variant} onClick={onClose} />}
      {children}
    </Wrapper>
  );
};

export default Alert;
