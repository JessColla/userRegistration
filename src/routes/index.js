import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListaUsuarios from "../pages/ListaUsuarios";
import Login from "../pages/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/", "/login"]} exact component={Login} />
        <Route path="/lista-usuarios" exact component={ListaUsuarios} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
