import {
  Characters,
  Comics,
  DetailPageCharacters,
  DetailPageComics,
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
    />
  </div>
);

export default App;
