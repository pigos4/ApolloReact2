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
  // const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(<>Inser username e password</>);
  const { setAuthTokens } = useAuth();
  //const referer = props.location.state.referer || '/';
  //const [idd ,setId] = useState("");
  //data.loginUser.status
  useEffect(() => {
    if (data) {
      if (data.loginUser.status === "error") {
        setIsError(<p>Error</p>);
      } else if (data.loginUser.status === "Username or password wrong") {
        setIsError(<p>Username or password wrong</p>);
      } else if (data.loginUser.status === "Logged") {
        setIsError(<p>Logged</p>);
        setAuthTokens(data.loginUser.username);
      }
    }
  }, [data]);

  // console.log(result.data+"res.data")
  // setId(result.data[1]);

  //  setAuthTokens(data.loginUser.username);
  //  console.log(data)
  //setLoggedIn(true);
  // console.log("id", id)

  //  else if (data.loginUser.status === 'error') {
  //  console.log('error')
  //    // setIsError(true);

  // }

  // if (isError === true) {
  //   return <Redirect to={"/"} />;
  // }
  // if (isLoggedIn) {
  //   return <Redirect to={'/data'} />;
  // }

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
    </>
  );
}

//export let id;

//function Login(props) {
//const [isLoggedIn, setLoggedIn] = useState(false);
//const [isError, setIsError] = useState(<p>Insert Username and password</p>);
//const [userName, setUserName] = useState("");
//const [password, setPassword] = useState("");
//const { setAuthTokens } = useAuth();
//const referer = props.location.state.referer || '/';
//   const [idd ,setId] = useState("");
// id=idd;
//   function postLogin() {

//  let dat = {userName, password};
//   let x= Api("post", "i", dat);
//   console.log(x);
//     x.then(result => {console.log(result.status)
//       if (result.status === 200) {console.log("status")
//         console.log(result.data+"res.data")
//         setId(result.data[1]);
//         setAuthTokens(result.data);
//         setLoggedIn(true);
//         console.log("id", id)
//       } else if (result.status === 401) {
//         setIsError(true);
//       }
//     }).catch(e => {
//      // setIsError(<Error>The username or password provided were incorrect!</Error>);

//     });
//   }
//   if (isError === true) {
//     return <Redirect to={"/"} />;
//   }
//   if (isLoggedIn) {
//     return <Redirect to={referer} />;
//   }
//   return (
//     <Card>
//       <Form>
//         <Input
//           type="username"
//           value={userName}
//           onChange={e => {
//             setUserName(e.target.value);
//           }}
//           placeholder="email"
//         />
//         <Input
//           type="password"
//           value={password}
//           onChange={e => {
//             setPassword(e.target.value);
//           }}
//           placeholder="password"
//         />
//         <Button onClick={postLogin}>Sign In</Button>
//       </Form>
//       <Link to="/signup">Don t have an account?</Link>
//     {isError}
//     </Card>
//   );
// }
// //{ ()=> {if (isError){return <Error>The username or password provided were incorrect!</Error>} }}
// export default Login;
