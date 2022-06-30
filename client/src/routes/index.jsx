import { createRoutes } from './service';

import Error404 from '~/pages/404';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';

const routers = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '*', element: <Error404 /> },
];

export default createRoutes(routers);
