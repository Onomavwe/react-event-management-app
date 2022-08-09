import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
import Manage from "./pages/Manage";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="groups/" element={<Groups />} />
    //   </Routes>
    // </BrowserRouter>

    <Router>
      <Navbar />

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/Groups" exact>
          <Groups />
        </Route>
        <Route path="/Events" exact>
          <Events />
        </Route>
        <Route path="/Manage" exact>
          <Manage />
        </Route>
        <Route path="/" render={(props) => <Home {...props} />}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
