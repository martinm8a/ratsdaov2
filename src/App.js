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
          <Route path="/shop" component={ShopItem} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
