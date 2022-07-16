import type { FC } from 'react';
import type { RegisterSchema } from '~/validations/auth';
import type { FetchingResponseError } from '~/types/api';

import { useState, useEffect } from 'react';
import { useSetDocumentTitle, useAppDispatch } from '~/hooks';
import { useForm } from 'react-hook-form';
import { useRegisterMutation } from '~/api/authApi';
import { registerResolver } from '~/validations/auth';
import { setUserAndAccessToken } from '~/store/reducers/user';

import { FadeIn } from '~/components/Animations';
import Form from '~/components/Form';
import Paragraph from '~/components/Paragraph';
import Alert from '~/components/Alert';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Divider from '~/components/Divider';
import { Link } from 'react-router-dom';

const Register: FC = () => {
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({ resolver: registerResolver });
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [register, { isLoading, error }] = useRegisterMutation();
  const dispatch = useAppDispatch();
  useSetDocumentTitle('Register');

  useEffect(() => {
    if (!error) return;
    if (!('data' in error)) return;

    const resError = error.data as FetchingResponseError;
    setErrorMessage(resError.message);
  }, [error]);

  const handleRegister = handleSubmit(async ({ confirmPassword, ...data }) => {
    try {
      setErrorMessage('');
      const user = await register(data).unwrap();
      dispatch(setUserAndAccessToken(user));
    } catch (error) {} // Ignore when error
  });

  return (
    <FadeIn from='bottom'>
      <Form width='27rem' onSubmit={handleRegister}>
        <Paragraph fontStyle='semibold' color='#011d33' size={6}>
          Register
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
        <Input
          label='Confirm Password'
          fullWidth
          type='password'
          {...formRegister('confirmPassword')}
          error={errors.confirmPassword !== undefined}
          errorMessage={errors.confirmPassword?.message}
        />
        <Button className='mt-3' fullWidth disabled={isLoading}>
          Register
        </Button>
        <Divider label='OR' />
        <Paragraph>
          Have an account? <Link to='/login'>Login</Link>
        </Paragraph>
      </Form>
    </FadeIn>
  );
};

export default Register;
