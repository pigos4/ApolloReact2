import { BrowserRouter as Router,Route,Switch } from "react-router-dom";


export default function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
