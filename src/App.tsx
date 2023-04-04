import {
  Characters,
  Comics,
  Filter,
  Navbar,
  Router,
  Stories,
} from './components';
import DetailPage from './components/templates/DetailPage/DetailPage';
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
      DetailPage={DetailPage}
    />
  </div>
);

export default App;
