import React, { useState, useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";

const LOGIN_USER = gql`
  mutation($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      id
      username
      status
    }
  }
`;

export default function Login(props) {
  const [loginUser, { data, loading }] = useMutation(LOGIN_USER);
  const [user, setUserLogin] = useState({ username: "", password: "" });
  const [isError, setIsError] = useState(<>Inser username e password</>);
  const { setAuthTokens } = useAuth();
  useEffect(() => {
    if (data) {
      if (data.loginUser.status === "error") {
        setIsError(<p>Error</p>);
      } else if (data.loginUser.status === "Username or password wrong") {
        setIsError(<p>Username or password wrong</p>);
      } else if (data.loginUser.status === "Logged") {
        setIsError("Logged");
        setAuthTokens(data.loginUser.username);
      }
    }
  }, [data]);


  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setUserLogin({ username: e.target.value, password: user.password });
        }}
        placeholder="username"
      ></input>
      <input
        type="password"
        onChange={(e) => {
          setUserLogin({ username: user.username, password: e.target.value });
        }}
        placeholder="password"
      ></input>
      <input
        type="button"
        value="submit"
        onClick={() => {
          loginUser({ variables: user });
        }}
      ></input>
      
      {loading ? <p>loading</p> : <p></p>}
      {isError}
      <br></br>

      <Link to="/signup">Don't have an account?</Link>
      {(isError==="Logged")?<Redirect to={"/data"} />:""}
    </>
  );
}
