import React from "react";
// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import Course from "./components/Course/Course";
import CourseAdmin from "./components/Course/CourseAdmin";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Team from "./components/Team/user/Team";
import Admin from "./components/Admin/Admin";
import Profile from "./components/Profile/Profile";
import AdminTeam from "./components/Team/admin/Team";
import AdminUsers from "./components/AdminUsers/AdminUsers";
import {checkSession} from "./actions/users";


class App extends React.Component {
  constructor(props) {
    super(props);
    checkSession(this); // sees if a user is logged in.
  }
  // global state passed down includes the current logged in user.
  state = {
    currentUser: null,
    admin: false
  }

  render() {
    const {currentUser, admin} = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
                exact path={["/", "/login", "/Home"] /* any of these URLs are accepted. */ }
                render={ props => (
                    <div className="app">
                      { /* Different componenets rendered depending on if someone is logged in. */}
                      {!currentUser ? <Login {...props} app={this} /> : <Home {...props} app={this} />}
                    </div>
                )}
            />

            <Route
                exact path="/Admin"
                render={props => (
                    <div className="app">
                      {(this.state.currentUser && this.state.admin) ? <Admin app={this} /> : <Login  app={this} />}
                    </div>
                )}
            />

            <Route
              exact
              path="/Profile"
              render={() => <Profile app={this} />}
            />
            <Route

              path="/Course/:courseCode"
              render={(props) => <Course {...props} app={this} />}
            />
            <Route
              exact
              path="/CourseAdmin/:courseCode"
              render={(props) => <CourseAdmin {...props} app={this} />}
            />
            <Route
              exact
              path="/Team"
              render={(props) => <Team {...props} app={this} />}
            />
            <Route
              exact
              path="/Profile"
              render={() => <Profile app={this} />}
            />
            <Route
              exact
              path="/teamAdmin"
              render={() => <AdminTeam app={this} />}
            />
            <Route
                exact
                path="/AdminUsers"
                render={() => <AdminUsers app={this} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
