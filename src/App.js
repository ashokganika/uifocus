import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as _ from "lodash";
import Header from "./component/header";
import AboutUs from "./screen/aboutus";
import Blog from "./screen/blog";
import Home from "./screen/home";
import Pagenotfound from "./screen/pagenotfound";
import Signup from "./screen/signup";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/register" component={Signup} />

        <Route component={Pagenotfound} />
      </Switch>
    </Router>
  );
}

export default App;

// let array = [1, "fdfd", null, undefined, "gdfs", 54, "", 22];
// console.log("clean array>>", _.compact(array));
// console.log("clean array>>", _.difference([1, 2, 3], [4, 5, 6, 2, 3, 1, 0]));
// let diff = _.differenceBy(
//   [
//     { x: 2, y: 3 },
//     { x: 1, y: 2 },
//   ],
//   [{ x: 1, y: 3 }],
//   "y"
// );
// console.log("diif by array", diff);
// let objects = [
//   { x: 1, y: 2 },
//   { x: 2, y: 1 },
//   { x: 1, y: 2 },
//   { x: 1, y: 2 },
//   { x: 1, y: 2 },
//   { x: 1, y: 2 },
//   { x: 1, y: 2 },
//   { x: 1, y: 2 },
//   { x: 1, y: 2, z: 3 },
//   { x: 1, y: 2, z: 4 },
//   { x: 1, y: 2, z: 5 },
// ];
// let obj = _.differenceWith(objects, [{ x: 1, y: 2 }], _.isEqual);
// console.log(obj);
