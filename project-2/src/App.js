import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Selection from "./components/Selection";
import Sell from "./components/Sell";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/selection">
          <Selection />
        </Route>
        <Route path="/sell">
          <Sell />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;