import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import {React,useState} from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { AuthContext } from "./context/auth";
import "./App.css";
import route from "./route/route";
import PrivateRoute from "./context/PrivateRoute";

import Data from './route/Data';

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

    // if (authTokens === undefined) {
    //     xx = "Log in";

    // } else {
    //     xx = "Log out"
    // }
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <ApolloProvider client={client}>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/xx">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign up</Link>
                </li>
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
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              {route.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}

              <PrivateRoute path="/data" component={Data} />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    </AuthContext.Provider>
  );
}
