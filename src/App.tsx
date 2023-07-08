import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { ROUTES } from "./routes";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.ABOUT} component={About} />
        <Route exact path={ROUTES.RESUME} component={Home} />
        <Route exact path={ROUTES.CONTACT} component={Home} />
        <Route exact path={ROUTES.PORRTFOLIO} component={Home} />
      </Switch>
    </>
  );
}

export default App;
