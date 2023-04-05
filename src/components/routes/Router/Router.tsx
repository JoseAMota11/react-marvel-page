import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RoutesEnum from '../routes';
import Filter from '../../atoms/Filter/Filter';
import {
  DetailPageCharacters,
  DetailPageComics,
  DetailPageStories,
  Home,
} from '../../../pages';
import Characters from '../../templates/Characters/Characters';
import Comics from '../../templates/Comics/Comics';
import Stories from '../../templates/Stories/Stories';
import RootLayouts from '../../layouts/RootLayouts';

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={RoutesEnum.Home} element={<RootLayouts />}>
        <Route path={RoutesEnum.Home} element={<Home />} index />
        <Route
          path={RoutesEnum.Characters}
          element={
            <>
              <Filter section="CHARACTERS" />
              <Characters />
            </>
          }
        />
        <Route
          path={RoutesEnum.DetailPageCharacter}
          element={<DetailPageCharacters />}
        />
        <Route
          path={RoutesEnum.Comics}
          element={
            <>
              <Filter section="COMICS" />
              <Comics />
            </>
          }
        />
        <Route
          path={RoutesEnum.DetailPageComics}
          element={<DetailPageComics />}
        />
        <Route
          path={RoutesEnum.Stories}
          element={
            <>
              <Filter section="STORIES" />
              <Stories />
            </>
          }
        />
        <Route
          path={RoutesEnum.DetailPageStories}
          element={<DetailPageStories />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Router;
