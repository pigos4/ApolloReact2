import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";


const LOGIN_USER = gql`
  mutation($username: String!, $password: String!, ) {
    loginUser(  username: $username, password:$password) {
      id,
      username,
      status
    }
  }
`;

export default function Login(props) {
  const [loginUser, { data, loading }] = useMutation(LOGIN_USER);
  const [user, setUserLogin] = useState({username: "",  password: "",});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(<></>);
  const { setAuthTokens } = useAuth();
  //const referer = props.location.state.referer || '/';
  const [idd ,setId] = useState("");
if(data){
  if (data.loginUser.status === 'ok') {console.log(data.loginUser.status,"status")
  // console.log(result.data+"res.data")
  // setId(result.data[1]);
   setAuthTokens(data.loginUser.username);
  // setLoggedIn(true);
  // console.log("id", id)
 } 
 else if (data.loginUser.status === 'err') {
  console.log('error')
   setIsError(<p>Insert Username and password</p>);
}
}

// if (isError === true) {
//   return <Redirect to={"/"} />;
// }
// if (isLoggedIn) {
//   return <Redirect to={'/data'} />;
// }



  return (
    <>
      <input type="text" onChange={(e)=>{setUserLogin({"username":e.target.value,"password":user.password})}}placeholder="username"></input>
      <input type="password" onChange={(e)=>{setUserLogin({"username":user.username,"password":e.target.value})}} placeholder="password"></input>
      <input type="button" value="submit" onClick={() => { loginUser({ variables: user  });}}></input>
      

      
      <input
        type="button"
        onClick={() => console.log(data)} value="consolelog"
      ></input>{user.username}{user.password}
      {loading ? <p>loading</p> : <p>done</p>}
      {isError}
      {/* {data?`Login ok ${data.addUser.response}"`:""} */}

      <Link to="/signup">Don t have an account?</Link>
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