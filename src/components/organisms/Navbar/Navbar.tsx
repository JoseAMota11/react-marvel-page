import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Route from '../../routes/routes';

const Navbar = () => {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const unorderedListRef = useRef<HTMLUListElement | null>(null);

  const handleClick = () => {
    buttonRef.current?.classList.toggle('open');
    unorderedListRef.current?.classList.toggle('open');
  };

  return (
    <nav className="navbar">
      <div className="navbar--btn" onClick={handleClick}>
        <div className="navbar--btn__menu" ref={buttonRef} />
      </div>
      <ul className="navbar--list" ref={unorderedListRef}>
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
};

export default Navbar;
