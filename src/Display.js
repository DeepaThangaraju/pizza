import Card from "react-bootstrap/Card";
import Button from '@mui/material/Button';


export function Display({ name, toppings, image, rating, id }) {
  return (
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
  );
}
