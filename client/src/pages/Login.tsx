import type { FC } from 'react';
import type { LoginSchema } from '~/validations/auth';
import type { Error } from '~/types/api';

import { useState } from 'react';
import { useDocumentTitle, useAppSelector, useAppDispatch } from '~/hooks';
import { useForm } from 'react-hook-form';
import { loginResolver } from '~/validations/auth';

import authFetch from '~/api/auth';
import { loginFetching, loginSuccess, loginFail } from '~/store/reducers/user';

import FadeIn from '~/components/FadeIn';
import Form from '~/components/Form';
import Paragraph from '~/components/Paragraph';
import Alert from '~/components/Alert';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Divider from '~/components/Divider';
import { Link } from 'react-router-dom';

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({ resolver: loginResolver });
  const dispatch = useAppDispatch();
  const { isFetching } = useAppSelector((state) => state.user);
  const [error, setError] = useState<string>('');
  useDocumentTitle('Login');

  const handleLogin = handleSubmit(async (data) => {
    try {
      dispatch(loginFetching());
      const { data: user } = await authFetch.login(data);
      dispatch(loginSuccess(user));
    } catch (error) {
      dispatch(loginFail());
      const resError = error as Error;
      const errorMessage = resError.response?.data.message as string;
      setError(errorMessage);
    }
  });

  return (
    <FadeIn from='bottom'>
      <Form width='27rem' onSubmit={handleLogin}>
        <Paragraph fontStyle='semibold' color='#011d33' size={6}>
          Login
        </Paragraph>
        {error && (
          <Alert
            title='Error !!!'
            variant='error'
            closeButton
            onCloseButtonClick={() => setError('')}
          >
            {error}
          </Alert>
        )}
        <Input
          label='Username'
          fullWidth
          {...register('username')}
          error={errors.username !== undefined}
          errorMessage={errors.username?.message}
        />
        <Input
          label='Password'
          fullWidth
          type='password'
          {...register('password')}
          error={errors.password !== undefined}
          errorMessage={errors.password?.message}
        />
        <Button className='mt-3' fullWidth disabled={isFetching}>
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
