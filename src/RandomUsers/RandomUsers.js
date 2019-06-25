import React from "react";
import { Users } from "../Users/Users";
import { User } from "../User/User";
import { BrowserRouter, Route, Link } from "react-router-dom";

export const RandomUsers = () => (
  <BrowserRouter>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/users/">Users</Link>
      </li>
    </ul>
    <Route path="/users" exact component={Users} />
    <Route path="/user" exact component={User} />
  </BrowserRouter>
);
