import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Detail() {
  const [Users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUsers(res.data))
      .then((res) => setloading(false))
      .catch((err) => console.log(err));
  }, []);
  console.log(Users);
  return (
    <div>
      {loading ? (
        "wait"
      ) : (
        <Card style={{ width: "18rem" }}>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{Users.name}</ListGroupItem>
            <ListGroupItem>{Users.company.name}</ListGroupItem>
            <ListGroupItem>{Users.address.city}</ListGroupItem>
            <ListGroupItem>{Users.address.street}</ListGroupItem>
          </ListGroup>
        </Card>
      )}
    </div>
  );
}

export default Detail;
