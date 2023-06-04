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
            <a href="#s">News</a>
          </li>
          <li className="nav__item">
            <a href="#s">Music</a>
          </li>
          <li className="nav__item">
            <a href="#s">Settings</a>
          </li>
        </ul>
      </nav>
    );
}
 
export default Navbar;