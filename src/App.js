import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/header";
import Aboutus from "./screen/aboutus";
import Blog from "./screen/blog";
import Home from "./screen/home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/about-us" component={Aboutus} />
      </Switch>
    </Router>
  );
}

export default App;
