import React from "react";

function Header({ children, openMenu }) {
  return (
    <header>
      {children}
      <div>
        {openMenu && (
          <ul className="san">
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
        )}
      </div>
    </header>
  );
}

export default Header;
