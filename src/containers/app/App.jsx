import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "../Header";
import { HomePage } from "../HomePage/HomePage";
import { HOME } from "../../routes";
import { ErrorPage } from "../../components/ErrorPage";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={HOME} component={HomePage} exact />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}
