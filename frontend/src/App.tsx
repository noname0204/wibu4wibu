import type { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from '~/routes';

const App: FC = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default App;
