import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/main";
import Nav from "../components/Nav";
import React, { useState } from "react";

function HomePage() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Header openMenu={openMenu}>
        <Nav setOpenMenu={setOpenMenu} openMenu={openMenu} />
      </Header>
      <Main />
      <Footer />
    </>
  );
}

export default HomePage;
