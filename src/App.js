import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from "./components/shared/Navigation";
import Home from "./components/Home";
// import UserLogin from "./components/UserLogin";
// import UserRegister from "./components/UserRegister";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="container-fluid App-header">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/signin" component={UserLogin} />
          <Route path="/signup" component={UserRegister} /> */}
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
