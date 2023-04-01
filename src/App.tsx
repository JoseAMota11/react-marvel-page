import Router from './components/routes/Router/Router';
import Home from './pages/Home/Home';

const App = () => (
  <div>
    <Router Home={<Home />} />
  </div>
);

export default App;
