import React from "react";
import logo from "../icons_assets/Logo.svg";

function Chicago() {
  return (
    <section className="ChicagoContainer">
      <div className="Chicago"></div>
      <div className="details">
        <img src={logo} alt="logo" />
        <h4>
          "Chicago's citrus haven. From zesty appetizers to tangy mains and
          desserts, every dish sings with lemon's bright flavor!""
        </h4>
      </div>
    </section>
  );
}

export default Chicago;
