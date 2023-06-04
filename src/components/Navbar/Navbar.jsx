import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/messages">Messages</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/news">News</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/music">Music</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/settings">Settings</NavLink>
          </li>
        </ul>
      </nav>
    );
}
 
export default Navbar;