import { Switch, Route } from "react-router-dom";
import Create from "../components/Create";
import Home from "../components/Home";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Create" component={Create} />
  </Switch>
);
