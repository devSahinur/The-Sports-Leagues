import './App.css';
import Leagues from './components/Leagues';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LeaguesDetails from './components/LeaguesDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/leagues/:id'>
          <LeaguesDetails/>
        </Route>
        <Route path='/' exact>
          <Leagues />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
