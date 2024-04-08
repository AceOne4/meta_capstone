import logo from "../icons_assets/Logo.svg";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";

function Nav({ setOpenMenu, openMenu }) {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul className="nav">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/"}>About</Link>
        </li>
        <li>
          <Link to={"/"}>Menu</Link>
        </li>
        <li>
          <Link to={"/booking"}>Reservation</Link>
        </li>
        <li>
          <Link to={"/"}>Order Online</Link>
        </li>
        <li>
          <Link to={"/"}>Login</Link>
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
