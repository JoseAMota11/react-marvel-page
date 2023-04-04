import { NavLink } from 'react-router-dom';
import Route from '../../routes/routes';

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar--list">
      <li className="navbar--list__item">
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'link')}
          to={Route.Home}
        >
          Home
        </NavLink>
      </li>
      <li className="navbar--list__item">
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'link')}
          to={Route.Characters}
        >
          Characters
        </NavLink>
      </li>
      <li className="navbar--list__item">
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'link')}
          to={Route.Comics}
        >
          Comics
        </NavLink>
      </li>
      <li className="navbar--list__item">
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'link')}
          to={Route.Stories}
        >
          Stories
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
