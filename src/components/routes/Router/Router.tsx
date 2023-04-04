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
  DetailPageCharacters: () => JSX.Element;
  DetailPageComics: () => JSX.Element;
  DetailPageStories: () => JSX.Element;
};

const Router = ({
  Home,
  Navbar,
  Characters,
  Comics,
  Stories,
  Filter,
  DetailPageCharacters,
  DetailPageComics,
  DetailPageStories,
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
      path: Route.Characters,
      element: (
        <>
          <Navbar />
          <Filter section="CHARACTERS" />
          <Characters />
        </>
      ),
    },
    {
      path: Route.DetailPageCharacter,
      element: (
        <>
          <Navbar />
          <DetailPageCharacters />
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
      path: Route.DetailPageComics,
      element: (
        <>
          <Navbar />
          <DetailPageComics />
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
    {
      path: Route.DetailPageStories,
      element: (
        <>
          <Navbar />
          <DetailPageStories />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
