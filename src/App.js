import './App.css';
// import Search from './Components/Search';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import People from './Components/People';
import Planets from './Components/Planets';
import Starships from './Components/Starships';
import Search from './Components/Search';
// import Spaceships from './components/Spaceships';
// import Planets from './components/Planets';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Search/>
          <Switch>
            <Route path="/people/:id">
              <People/>
            </Route>

            <Route path="/starships/:id">
              <Starships/>
            </Route> 

            <Route path="/planets/:id">
              <Planets/>
            </Route>

          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
