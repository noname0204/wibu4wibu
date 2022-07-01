import FadeInForm from '~/components/FadeInForm';
import Input from '~/components/Input';
import Divider from '~/components/Divider';
import Paragraph from '~/components/Paragraph';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <FadeInForm width='27rem'>
      <Paragraph variant='semibold' color='#011d33' size={6}>
        Register
      </Paragraph>
      <Input label='Username' fullWidth />
      <Input label='Password' fullWidth type='password' />
      <Input label='Confirm Password' fullWidth type='password' />
      <Button className='mt-3' fullWidth>
        Register
      </Button>
      <Divider label='OR' />
      <Paragraph>
        Have an account? <Link to='/login'>Login</Link>
      </Paragraph>
    </FadeInForm>
  );
};

export default Register;
