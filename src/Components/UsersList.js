import axios from "axios";
import React, { useEffect, useState } from "react";
import UsersCard from "./UsersCard";
function UsersList() {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(Users);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",

        justifyContent: "space-around",
      }}
    >
      {Users.map((user) => (
        <UsersCard user={user}></UsersCard>
      ))}
    </div>
  );
}

export default UsersList;
