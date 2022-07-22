import type { FC } from 'react';
import type { LoginValidation } from '~/types/validations';
import type { FetchingResponseError } from '~/types/api';

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useSetDocumentTitle, useAppDispatch } from '~/hooks';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '~/api/authApi';
import { loginResolver } from '~/validations/auth';
import { setUserAndAccessToken } from '~/store/reducers/user';

import { FadeIn } from '~/components/Animations';
import { Form, Paragraph } from '~/components/Styled';
import Alert from '~/components/Alert';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Divider from '~/components/Divider';
import { Link } from 'react-router-dom';

const StyledButton = styled(Button)`
  margin-top: 0.75rem;
`;

const Login: FC = () => {
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValidation>({ resolver: loginResolver });
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useAppDispatch();
  useSetDocumentTitle('Login');

  useEffect(() => {
    if (!error) return;
    if (!('data' in error)) return;

    const resError = error.data as FetchingResponseError;
    setErrorMessage(resError.message);
  }, [error]);

  const handleLogin = handleSubmit(async (data) => {
    try {
      setErrorMessage('');
      const user = await login(data).unwrap();
      dispatch(setUserAndAccessToken(user));
    } catch (error) {} // Ignore when error
  });

  return (
    <FadeIn from='bottom'>
      <Form width='27rem' onSubmit={handleLogin}>
        <Paragraph fontStyle='semibold' color='#011d33' size={2.2}>
          Login
        </Paragraph>
        {errorMessage && (
          <Alert
            title='Error !!!'
            variant='error'
            closeButton
            onCloseButtonClick={() => setErrorMessage('')}
          >
            {errorMessage}
          </Alert>
        )}
        <Input
          label='Username'
          fullWidth
          {...formRegister('username')}
          error={errors.username !== undefined}
          errorMessage={errors.username?.message}
        />
        <Input
          label='Password'
          fullWidth
          type='password'
          {...formRegister('password')}
          error={errors.password !== undefined}
          errorMessage={errors.password?.message}
        />
        <StyledButton fullWidth disabled={isLoading}>
          Login
        </StyledButton>
        <Divider label='OR' />
        <Paragraph>
          Don't have an account? <Link to='/register'>Register</Link>
        </Paragraph>
      </Form>
    </FadeIn>
  );
};

export default Login;
