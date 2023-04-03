import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Route from '../routes';
import { FilterProps } from '../../atoms/Filter/Filter';

type RouteProps = {
  Home: () => JSX.Element;
  Navbar: () => JSX.Element;
  Characters: () => JSX.Element;
  Comics: () => JSX.Element;
  Stories: () => JSX.Element;
  Filter: ({ section }: FilterProps) => JSX.Element;
};

const Router = ({
  Home,
  Navbar,
  Characters,
  Comics,
  Stories,
  Filter,
}: RouteProps) => {
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
          <Filter section="CHARACTERS" />
          <Characters />
        </>
      ),
    },
    {
      path: Route.Comics,
      element: (
        <>
          <Navbar />
          <Filter section="COMICS" />
          <Comics />
        </>
      ),
    },
    {
      path: Route.Stories,
      element: (
        <>
          <Navbar />
          <Filter section="STORIES" />
          <Stories />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
