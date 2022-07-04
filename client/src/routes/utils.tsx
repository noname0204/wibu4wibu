import type { ElementType, ReactElement, PropsWithChildren } from 'react';
import { Fragment } from 'react';
import DefaultLayout from '~/layouts/DefaultLayout';

export interface Router {
  path: string;
  element: ReactElement;
  layout?: ElementType<PropsWithChildren> | null;
}

interface Route {
  path: string;
  element: ReactElement;
}

/**
 * List of router with path, element and layout field.
 * @param router Router object
 * @returns List of route with path and element field.
 */
export const createRoutes = (router: Router[]): Route[] => {
  return router.map((route) => {
    const { path, element, layout } = route;

    let Layout: ElementType<PropsWithChildren> = DefaultLayout;
    if (layout) Layout = layout;
    else if (layout === null) Layout = Fragment;

    return { path, element: <Layout>{element}</Layout> };
  });
};
