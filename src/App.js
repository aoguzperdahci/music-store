import React, { Component } from "react";
import Footer from "./Components/Footer";
import MenuBar from "./Components/MenuBar";
import Page from "./Components/Page";

class App extends Component {
  render() {
    return (
      <div>
        <MenuBar></MenuBar>
        <Page></Page>
        <Footer/>
      </div>
    );
  }
}

export default App;
