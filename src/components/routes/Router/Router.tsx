import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Route from '../routes';

type RouteProps = {
  Home: () => JSX.Element;
  Navbar: () => JSX.Element;
  Characters: () => JSX.Element;
  Comics: () => JSX.Element;
  Stories: () => JSX.Element;
};

const Router = ({ Home, Navbar, Characters, Comics, Stories }: RouteProps) => {
  const router = createBrowserRouter([
    {
      path: Route.Home,
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: Route.Character,
      element: (
        <>
          <Navbar />
          <Characters />
        </>
      ),
    },
    {
      path: Route.Comics,
      element: (
        <>
          <Navbar />
          <Comics />
        </>
      ),
    },
    {
      path: Route.Stories,
      element: (
        <>
          <Navbar />
          <Stories />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
