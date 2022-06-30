import { Fragment } from 'react';
import DefaultLayout from '~/layouts/DefaultLayout';

export const createRoutes = (router) => {
  return router.map((route) => {
    const { path, element, layout } = route;

    let Layout = DefaultLayout;
    if (layout) Layout = layout;
    else if (layout === null) Layout = Fragment;

    return { path, element: <Layout>{element}</Layout> };
  });
};
