import { Switch, Route } from "react-router-dom";
import About from "../About";
import Home from "../Home";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </Switch>
);
