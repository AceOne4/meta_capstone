import React from "react";
import Button from "./Button";
import restFood from "../icons_assets/restauranfood.jpg";
import { useNavigate } from "react-router-dom";
function CallToAction() {
  const nav = useNavigate();
  function clickHanler() {
    nav("/booking", { replace: true });
  }
  return (
    <section className="cta">
      <div className="Hero">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are Family owned mediterranean resurant, <br /> focused on
            traditional receipe served with a modern twist
          </p>
          <Button clickHanler={clickHanler}> Reserve a Table</Button>
        </div>
      </div>
      <img src={restFood} alt="resurant Food" height="320px" width="260px" />;
    </section>
  );
}

export default CallToAction;
