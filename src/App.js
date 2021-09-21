import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Services from "./components/pages/Services";
import Tecnica from "./components/pages/Tecnica";
import Contact from "./components/pages/Contact";
import Media from "./components/pages/Media";
import Review from "./components/pages/Review"
import ShopItem from "./components/pages/ShopItem"
import AllCards from "./components/pages/AllCards"
/* ItemPages */
import Item4 from "./components/pages/PagesItems/i4"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Review" component={Review} />
          <Route path="/services" component={Services} />
          <Route path="/tecnica" component={Tecnica} />
          <Route path="/contact" component={Contact} />
          <Route path="/media" component={Media} />
          <Route path="/AllProducts" component={AllCards} />
          <div>
            <Route path="/Item4" component={Item4} />
          </div>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
