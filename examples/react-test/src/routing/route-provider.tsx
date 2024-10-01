import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { appRouter } from './router-configs';

export const AppRouter = () => <RouterProvider router={createBrowserRouter(appRouter)} />;
