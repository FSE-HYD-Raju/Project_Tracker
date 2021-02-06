import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ForgotPasswordPage,
  LoginPage,
  RegisterPage,
  Error400,
  Error500,
  Empty,
  ProfilePage,
} from "./pages";

import Home from "./components/Home";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";

import "tabler-react/dist/Tabler.css";
import Blogs from "./components/blogs";
import ContactUs from "./components/contactus";

type Props = {||};

function App(props: Props): React.Node {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/400" component={Error400} />
          <Route exact path="/empty-page" component={Empty} />
          <Route exact path="/forgot-password" component={ForgotPasswordPage} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/contactus" component={ContactUs} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
