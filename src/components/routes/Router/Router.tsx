import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Route from '../routes';

type RouteProps = {
  Home: JSX.Element;
};

const Router = ({ Home }: RouteProps) => {
  const router = createBrowserRouter([
    {
      path: Route.Home,
      element: Home,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
