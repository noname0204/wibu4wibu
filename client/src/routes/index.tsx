import { createRoutes, Router } from './utils';

// Layouts
import AuthLayout from '~/layouts/AuthLayout';

// Pages
import Error404 from '~/pages/404';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';

const routers: Router[] = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login />, layout: AuthLayout },
  { path: '/register', element: <Register />, layout: AuthLayout },
  { path: '*', element: <Error404 />, layout: AuthLayout },
];

export default createRoutes(routers);
