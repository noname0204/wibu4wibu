import type { FC } from 'react';
import type { LoginSchema } from '~/validations/auth';
import type { FetchingResponseError } from '~/types/api';

import { useState, useEffect } from 'react';
import { useDocumentTitle } from '~/hooks';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '~/store/reducers/user';
import { loginResolver } from '~/validations/auth';

import { FadeIn } from '~/components/Animations';
import Form from '~/components/Form';
import Paragraph from '~/components/Paragraph';
import Alert from '~/components/Alert';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Divider from '~/components/Divider';
import { Link } from 'react-router-dom';

const Login: FC = () => {
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({ resolver: loginResolver });
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [login, { isLoading, error }] = useLoginMutation();
  useDocumentTitle('Login');

  useEffect(() => {
    if (!error) return;
    if (!('data' in error)) return;

    const resError = error.data as FetchingResponseError;
    setErrorMessage(resError.message);
  }, [error]);

  const handleLogin = handleSubmit(async (data) => await login(data));

  return (
    <FadeIn from='bottom'>
      <Form width='27rem' onSubmit={handleLogin}>
        <Paragraph fontStyle='semibold' color='#011d33' size={6}>
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
        <Button className='mt-3' fullWidth disabled={isLoading}>
          Login
        </Button>
        <Divider label='OR' />
        <Paragraph>
          Don't have an account? <Link to='/register'>Register</Link>
        </Paragraph>
      </Form>
    </FadeIn>
  );
};

export default Login;
