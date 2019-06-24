import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

export const Users = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const reponse = await fetch("https://randomuser.me/api/?results=10");
      const data = await reponse.json();
      setResults(data.results);
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
      {results.map(result => (
        <Card
          key={result.login.uuid}
          style={{ color: "black", margin: "20px", width: "250px" }}
        >
          <CardImg
            top
            width="100%"
            src={result.picture.large}
            alt={result.cell}
          />
          <CardBody>
            <CardTitle>
              {result.name.title} {result.name.first} {result.name.last}
            </CardTitle>
            <CardText>{result.email}</CardText>
            <CardText>
              <small className="text-muted">
                Registered on {result.registered.date}
              </small>
            </CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
