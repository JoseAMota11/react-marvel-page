import {
  Characters,
  Comics,
  DetailPageCharacters,
  DetailPageComics,
  DetailPageStories,
  Filter,
  Navbar,
  Router,
  Stories,
} from './components';
import { Home } from './pages';

const App = () => (
  <div>
    <Router
      Home={Home}
      Navbar={Navbar}
      Characters={Characters}
      Comics={Comics}
      Stories={Stories}
      Filter={Filter}
      DetailPageCharacters={DetailPageCharacters}
      DetailPageComics={DetailPageComics}
      DetailPageStories={DetailPageStories}
    />
  </div>
);

export default App;
