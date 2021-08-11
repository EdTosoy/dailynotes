import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./Pages/Notes";
import Create from "./Pages/Create";
import { Layout } from "./Components/Layout";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
