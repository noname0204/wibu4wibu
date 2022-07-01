import PropTypes from 'prop-types';
import bgImg from '~/assets/auth-background.svg';

const AuthLayout = ({ children }) => {
  return (
    <div
      className='inline-flex h-screen w-screen items-center justify-center bg-cover bg-no-repeat'
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {children}
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node,
};

export default AuthLayout;
