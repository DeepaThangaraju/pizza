
import './App.css';
// import{ Switch, Route,Router, Link} from "react-router-dom"
import { Link, Route, Switch } from "react-router-dom";

import { Pizzalist } from './Pizzalist';
import { AddPizza } from './AddPizza';


function App() {
  return (
   
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/pizza">Home</Link></li>
          <li><Link to="/addpizza">Add Pizza</Link></li>
          <li><Link to="/orderpizza">Place Order</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/pizza">
          <Pizzalist/>
        </Route>
        <Route path="/addpizza">
          <AddPizza/>
        </Route>
      </Switch>
     
    </div>
   
  );
}

export default App;
