import type { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import RequireAuth from '~/layouts/RequireAuth';
import AuthLayout from '~/layouts/AuthLayout';
import DefaultLayout from '~/layouts/DefaultLayout';

// Pages
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';
import Register from '~/pages/Register';
import Error404 from '~/pages/404';

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<RequireAuth />}>
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path='profile' element={<Profile />} />
        </Route>

        <Route path='/' element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

        <Route path='*' element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default App;
