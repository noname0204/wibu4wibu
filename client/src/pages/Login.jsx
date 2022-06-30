import Form from '~/components/Form';
import Input from '~/components/Input';
import Divider from '~/components/Divider';
import Paragraph from '~/components/Paragraph';

const Login = () => {
  return (
    <Form width='27rem'>
      <Paragraph variant='bold' size={6}>
        Login
      </Paragraph>
      <Input label='Username' fullWidth />
      <Input label='Password' fullWidth type='password' />
      <Divider label='Test' />
    </Form>
  );
};

export default Login;
