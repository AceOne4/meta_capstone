import React from "react";
import { Link } from "react-router-dom";

function Header({ children, openMenu }) {
  return (
    <header>
      {children}
      <div>
        {openMenu && (
          <ul className="san">
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
        )}
      </div>
    </header>
  );
}

export default Header;
