import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const reponse = await fetch("https://randomuser.me/api/?results=10");
      const data = await reponse.json();
      setUsers(data.results);
    }

    getUsers();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        flexWrap: "wrap"
      }}
    >
      {users.map(user => (
        <Card
          key={user.login.uuid}
          style={{ color: "black", margin: "20px", width: "250px" }}
          tag={Link}
          to={{
            pathname: "/user",
            state: { user: user }
          }}
        >
          <CardImg top width="100%" src={user.picture.large} alt={user.cell} />
          <CardBody>
            <CardTitle>
              {user.name.first} {user.name.last}
            </CardTitle>
            <CardText>
              <small className="text-muted">
                Registered on {user.registered.date}
              </small>
            </CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
