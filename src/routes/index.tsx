import { Switch, Route } from "react-router-dom";
import Create from "../Create";
import Home from "../Home";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Create" component={Create} />
  </Switch>
);
