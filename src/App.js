import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './Pages/Notes'
import Create from './Pages/Create'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;