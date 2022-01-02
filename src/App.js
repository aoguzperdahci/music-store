import Footer from "./Components/Footer";
import MenuBar from "./Components/MenuBar";
import Page from "./Components/Page";
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <MenuBar />
    </Router>
<Page></Page>
<Footer></Footer>
</>
  );
}

export default App;
