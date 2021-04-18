 
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import NoMatch from './Components/NoMatch';
import Explore from './Components/Explore';

function App() {



  return (
    <Router>
      <Switch>

        <Route path="/home">
          <Home />
        </Route>

        <Route path='/about/:idTeam'>
            <Explore/>
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>




      </Switch>
    </Router>







  );
}

export default App;
