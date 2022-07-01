import Form from '~/components/Form';
import Input from '~/components/Input';
import Divider from '~/components/Divider';
import Paragraph from '~/components/Paragraph';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Form width='27rem'>
      <Paragraph variant='semibold' color='#011d33' size={6}>
        Login
      </Paragraph>
      <Input label='Username' fullWidth />
      <Input label='Password' fullWidth type='password' />
      <Button className='mt-3' fullWidth>
        Login
      </Button>
      <Divider label='OR' />
      <Paragraph>
        Don't have an account? <Link to='/register'>Register</Link>
      </Paragraph>
    </Form>
  );
};

export default Login;
