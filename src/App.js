import { Snackbar } from "@material-ui/core";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorBoundary from "./component/ErrorBoundery";
import Header from "./component/header";
import Home from "./screen/home";
import Pagenotfound from "./screen/pagenotfound";

const SignUp = React.lazy(() => import("./screen/signup"));
const AboutUS = React.lazy(() => import("./screen/aboutus"));
const Login = React.lazy(() => import("./screen/Login"));
const Blog = React.lazy(() => import("./screen/blog"));

function App() {
  return (
    <Router>
      <Header />

      <Suspense
        fallback={
          <div>
            <h2>Loading.....................</h2>
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog">
            <ErrorBoundary>
              <Blog />
            </ErrorBoundary>
          </Route>
          <Route exact path="/about-us">
            <AboutUS searchAbout="dogs" />
          </Route>
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/login" component={Login} />

          <Route component={Pagenotfound} />
        </Switch>
      </Suspense>
      <Snackbar />
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
