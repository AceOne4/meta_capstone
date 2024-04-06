import React from "react";
import Button from "./Button";
import CallToAction from "./CallToAction ";
import Specials from "./Specials";

function Main() {
  return (
    <main>
      <CallToAction />
      <section className="sec">
        <div className="heading">
          <h1>This weeks specials!</h1>
          <Button>Online Menu</Button>
        </div>
        <Specials />
      </section>
    </main>
  );
}

export default Main;
