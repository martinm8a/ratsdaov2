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
import Item1 from "./components/pages/PagesItems/i1"
import Item2 from "./components/pages/PagesItems/i2"
import Item3 from "./components/pages/PagesItems/i3"
import Item4 from "./components/pages/PagesItems/i4"
import Item5 from "./components/pages/PagesItems/i5"
import Item6 from "./components/pages/PagesItems/i6"
import Item7 from "./components/pages/PagesItems/i7"
import Item8 from "./components/pages/PagesItems/i8"
import Item9 from "./components/pages/PagesItems/i9"
import Item10 from "./components/pages/PagesItems/i10"

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
            <Route path="/Item1" component={Item1} />
            <Route path="/Item2" component={Item2} />
            <Route path="/Item3" component={Item3} />
            <Route path="/Item4" component={Item4} />
            <Route path="/Item5" component={Item5} />
            <Route path="/Item6" component={Item6} />
            <Route path="/Item7" component={Item7} />
            <Route path="/Item8" component={Item8} />
            <Route path="/Item9" component={Item9} />
            <Route path="/Item10" component={Item10} />
          </div>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
