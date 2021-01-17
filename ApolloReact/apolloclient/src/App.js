import {  ApolloProvider,ApolloClient, InMemoryCache, HttpLink, } from '@apollo/client';
import React from "react";
import {  BrowserRouter as Router,  Switch, Link} from "react-router-dom";
import './App.css';
import route from './route/route';
const RouteWithSubRoutes= require('./route/RouteWithSubRoutes').default

const client = new ApolloClient({
  link: new HttpLink({uri: 'http://localhost:4000/'}),
  cache: new InMemoryCache()
});

export default function App() {
 

  return (
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
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        {route.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
          
          
        </Switch>
      </div>
    </Router>
     </ApolloProvider>
  );
}


