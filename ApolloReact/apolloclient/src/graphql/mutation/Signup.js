import { React, useState } from "react";
import { gql, useMutation } from "@apollo/client";

const ADD_USER = gql`
  mutation($name: String!, $username: String!, $password: String!) {
    addUser(name: $name, username: $username, password: $password) {
      response
    }
  }
`;

export default function Mut() {
  const [addUser, { data, loading }] = useMutation(ADD_USER);
  const [user, setUser] = useState({ name: "", username: "", password: "" });
  return (
    <>
      <input
        type="text"
        onChange={(e) =>
          setUser({
            name: e.target.value,
            username: user.username,
            password: user.password,
          })
        }
        placeholder="Name"
      ></input>
      <input
        type="text"
        onChange={(e) => {
          setUser({
            name: user.name,
            username: e.target.value,
            password: user.password,
          });
        }}
        placeholder="Username"
      ></input>
      <input
        type="password"
        onChange={(e) => {
          setUser({
            name: user.name,
            username: user.username,
            password: e.target.value,
          });
        }}
        placeholder="Password"
      ></input>
      <input
        type="button"
        value="Submit"
        onClick={() => {
          addUser({ variables: user });
        }}
      ></input>
      {user.name}
      {user.username}
      {user.password}
      {loading ? <p>loading</p> : <p>done</p>}
      {data ? `${data.addUser.response}"` : ""}
    </>
  );
}
