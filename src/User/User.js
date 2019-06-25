import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
import { withRouter } from "react-router";

export const User = withRouter(props => {
  const user =
    props.location && props.location.state && props.location.state.user;

  return user ? (
    <Card style={{ color: "black", margin: "20px", width: "250px" }}>
      <CardImg top width="100%" src={user.picture.large} alt={user.cell} />
      <CardBody>
        <CardTitle>
          {user.name.title} {user.name.first} {user.name.last}
        </CardTitle>
        <CardText>Phone: {user.phone}</CardText>
        <CardText>Gender: {user.gender}</CardText>
        <CardText>Email: {user.email}</CardText>
        <CardText>
          Location: {user.location.coordinates.latitude}{" "}
          {user.location.coordinates.longitude}
        </CardText>
        <CardText>
          <small className="text-muted">
            Registered on {user.registered.date}
          </small>
        </CardText>
      </CardBody>
    </Card>
  ) : (
    "Please specify a user"
  );
});
