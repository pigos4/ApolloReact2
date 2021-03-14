import {  ApolloProvider,  ApolloClient,  InMemoryCache,  HttpLink,} from "@apollo/client";
import {React,useState} from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { AuthContext } from "./context/auth";
import "./App.css";
import route from "./route/route";
import PrivateRoute from "./context/PrivateRoute";
import Data from './route/Data';
const Login = require('./route/Login').default;
const SignUp = require ('./route/Signup').default;

const RouteWithSubRoutes = require("./route/RouteWithSubRoutes").default;

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000/" }),
  cache: new InMemoryCache(),
});

export default function App() {
  const [authTokens, setAuthTokens] = useState();
    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    }

    function Logout(){
      return(<>ciao
      <input type="button"  onClick={()=>setAuthTokens(undefined)} value="Logout" />
      </>)
    }

function Access(){
  const routes =[
   
    {
        path:"/login",
        component: Login
    },
    {
        path:"/signup",
        component: SignUp
    }
    ]
const logout={
  path:"/logout",
  component: Logout
};
 
   if(authTokens===undefined){
return routes.map((routes, i) => (
      <RouteWithSubRoutes key={i} {...routes} />
    ))}else{ return(<><RouteWithSubRoutes {...logout}/></>)}




    // <><RouteWithSubRoutes path="/login" component= {Login} />
    // <RouteWithSubRoutes path="/signup" component= {SignUp} />
    // </>):(<><RouteWithSubRoutes path="/logout" component= {Logout} />
    
    // </>);
    
  }

  


  




  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <ApolloProvider client={client}>
        <Router>
          <div>
            <nav>
              <ul className="ulContainer" >
                <li>
                  <Link  to="/">Home</Link>
                </li>

{(authTokens===undefined)?(<><li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign up</Link>
                </li></>):<li>
                  <Link to="/logout">Logout</Link>
                </li>}

                



                <li>
                  <Link to="/data">Data</Link>
                </li>
                <li>
                  <Link to="/dato">Dato</Link>
                </li>
                <li>
                  <Link to="/crypto">Crypto</Link>
                </li>
                <li>
                  <Link to="/list">List</Link>
                </li>
                <li>
                  <Link to="/records">Records</Link>
                </li>
              </ul>
            </nav>

            <Switch>
            {route.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            <PrivateRoute path="/data" component={Data} />
            <Access/>
              
              
              
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    </AuthContext.Provider>
  );
}
