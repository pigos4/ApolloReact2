import { React, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Redirect } from "react-router-dom";

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
      <div className="Container">
        {" "}
        <input
          type="text"
          className="smallContainer"
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
          className="smallContainer"
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
          className="smallContainer"
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
          className="smallContainer"
          type="button"
          value="Submit"
          onClick={() => {
            addUser({ variables: user });
          }}
        ></input>
        {loading ? <p>loading</p> : <p>Complite the form to sign up</p>}
        {data ? <Redirect to={"/data"} /> : ""}
      </div>
    </>
  );
}
//`${data.addUser.response}`;
