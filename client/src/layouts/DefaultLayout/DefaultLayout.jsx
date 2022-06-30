import PropTypes from 'prop-types';

const DefaultLayout = ({ children }) => {
  return children;
};

DefaultLayout.propTypes = {
  children: PropTypes.node,
};

export default DefaultLayout;
