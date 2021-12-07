
import './App.css';
import { useState } from 'react';
// import{ Switch, Route,Router, Link} from "react-router-dom"
import { Link, Route, Switch } from "react-router-dom";
import Card from "react-bootstrap/Card";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function App() {
  return (
   
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/addpizza">Add Pizza</Link></li>
          <li><Link to="/orderpizza">Place Order</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Pizzalist/>
        </Route>
        <Route path="/addpizza">
          <AddPizza/>
        </Route>
      </Switch>
     
    </div>
   
  );
}

function Pizzalist(){
  const [pizza,setPizza]=useState([]);
 
    fetch("https://6166c4e813aa1d00170a6717.mockapi.io/pizza",{method:"GET"})
    .then((data)=>data.json())
    .then((list)=>setPizza(list))
  
  return(
    <div className="dashboard">
       {pizza.map(({name,toppings,image,rating},index)=><Display
       name={name}
       toppings={toppings}
       image={image}
       rating={rating}
       />)}
    </div>
  )
}

function Display({name,toppings,image,rating,id}){
  return(
    <div className="display">
      
      <Card>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title> <h4>{name}</h4></Card.Title>
    <Card.Text>
     <p>{toppings}</p>
     <h5>⭐{rating}</h5>
    </Card.Text>
    <Button variant="primary">Place Order</Button>
  </Card.Body>
</Card>
    </div>
  )
}

function AddPizza(){
  
  return(
    <div>

<TextField id="outlined-basic" label="Pizza Name" variant="outlined" /><br/>
<TextField id="outlined-basic" label="Image url" variant="outlined" /><br/>
<TextField id="outlined-basic" label="Toppings" variant="outlined" /><br/>
<TextField id="outlined-basic" label="rating" variant="outlined" /><br/>
<Button variant="outlined">Add Pizza</Button>


 
 
 

    </div>
  )
}

export default App;
