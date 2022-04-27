import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PesquisarColab } from "./pages/PesquisarColab";
import { Escala } from "./pages/Escala";

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/colaborador">
          <PesquisarColab />
        </Route>
        <Route exact path="/escala">
          <Escala />
        </Route>
      </Switch>
    </Router>
  );
}
