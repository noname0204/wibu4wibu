import type { FC } from 'react';
import type { RegisterSchema } from '~/validations/auth';

import { useDocumentTitle } from '~/hooks';
import { useForm } from 'react-hook-form';
import { registerResolver } from '~/validations/auth';

import FadeIn from '~/components/FadeIn';
import Form from '~/components/Form';
import Paragraph from '~/components/Paragraph';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Divider from '~/components/Divider';
import { Link } from 'react-router-dom';

const Register: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({ resolver: registerResolver });
  useDocumentTitle('Register');

  const handleRegister = handleSubmit(({ confirmPassword, ...data }) => {
    console.log(data);
  });

  return (
    <FadeIn from='bottom'>
      <Form width='27rem' onSubmit={handleRegister}>
        <Paragraph fontStyle='semibold' color='#011d33' size={6}>
          Register
        </Paragraph>
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
        <Input
          label='Confirm Password'
          fullWidth
          type='password'
          {...register('confirmPassword')}
          error={errors.confirmPassword !== undefined}
          errorMessage={errors.confirmPassword?.message}
        />
        <Button className='mt-3' fullWidth>
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
