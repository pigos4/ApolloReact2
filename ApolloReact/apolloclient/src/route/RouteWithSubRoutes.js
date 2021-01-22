import { BrowserRouter as Router,Route,Switch } from "react-router-dom";


export default function RouteWithSubRoutes(route) {

  // if (route.private === "yes") {
  //   console.log(route);
  //   return (<Route
  //     path={route.path}
  //     render={(props) => (
  //       // pass the sub-routes down to keep nesting
  //       <PrivateRoute {...props} routes={route.routes} />
  //     )}
  //   />
    
    
  //   )
  // }else{
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
