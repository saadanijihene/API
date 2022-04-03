import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import React from "react";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";

const UsersCard = ({ user }) => {
  return (
    <div key={user.id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="data:image/png;base64,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"
        />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.username}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem></ListGroupItem>
          <ListGroupItem>{user.phone}</ListGroupItem>
          <ListGroupItem>{user.address.city}</ListGroupItem>
          <ListGroupItem>{user.address.zipcode}</ListGroupItem>
        </ListGroup>
        <Link to={`/details/${user.id}`}>
          <button>Details</button>
        </Link>
      </Card>
    </div>
  );
};

export default UsersCard;
