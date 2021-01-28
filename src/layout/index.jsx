import React from "react";
import NavBar from "./navbar";
import Content from "./content";
import Footer from "./footer";

function Layout(props) {
  return (
    <div>
      <NavBar></NavBar>
      <div className="hidden  lg:block pt-8">
          <br></br>
          <br></br>
      </div>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
