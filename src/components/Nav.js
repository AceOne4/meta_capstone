import logo from "../icons_assets/Logo.svg";
import { MdOutlineMenu } from "react-icons/md";
function Nav({ setOpenMenu, openMenu }) {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul className="nav">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Reservation</a>
        </li>
        <li>
          <a href="/">Order Online</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
      <MdOutlineMenu
        className="sandwich"
        onClick={() => setOpenMenu(!openMenu)}
      />
    </nav>
  );
}

export default Nav;
