import React from "react";
import { Card, Button} from 'react-bootstrap';
import "./Card.css"

const CardItem = (props) => {
    return (
        <Card style={{ width: '18rem' }} className="custom-card mx-3 my-3">
        <Card.Img variant="top" src={props.src} classsName=" card-item" />
        <Card.Body className="card-body">
          <Card.Title className="text-success">{props.title}</Card.Title>
          <Card.Text className="card-text">
            {props.location}
          </Card.Text>
          <Button variant="primary">More Info</Button>
        </Card.Body>
      </Card>
    )
}

export default CardItem;