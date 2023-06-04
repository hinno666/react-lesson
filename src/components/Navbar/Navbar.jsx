import './Navbar.css'

const Navbar = () => {
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/profile">Profile</a>
          </li>
          <li className="nav__item">
            <a href="/dialogs">Messages</a>
          </li>
          <li className="nav__item">
            <a href="/news">News</a>
          </li>
          <li className="nav__item">
            <a href="/music">Music</a>
          </li>
          <li className="nav__item">
            <a href="/settings">Settings</a>
          </li>
        </ul>
      </nav>
    );
}
 
export default Navbar;