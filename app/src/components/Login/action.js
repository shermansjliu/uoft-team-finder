const log = console.log;

export const register = (request) => {
  request.setState({
    msg: "",
  });
  log("register");

  const user = {
    username: request.state.userName,
    password: request.state.userPassword
  };
  // Create our request constructor with all the parameters we need
  const new_request = new Request("/api/users", {
    method: "post",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    }
  });
  // Send the request with fetch()
  fetch(new_request).then(res => {
    console.log(res.status)
    if (res.status === 200) {
      return res.json();
    }else{
      throw new Error("Failed to register: invalid username");
    }
  })
      .then(json => {
        request.setState({
          msg: "Signed up Successfully! Click Login to login.",
          msgColor: "green",
        });
      })
      .catch(error => {
        console.log(error);
        log("failed to register");
        request.setState({
          msg: "" + error,
          msgColor: "red",
        });
      });
};

export const login = (request, app) => {
  request.setState({
    msg: "",
  });
  console.log(app)
  log("login");
  const user = {
    username: request.state.userName,
    password: request.state.userPassword,
  };
  // Create our request constructor with all the parameters we need
  const new_request = new Request("/users/login", {
    method: "post",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    }
  });
  // Send the request with fetch()
  fetch(new_request)
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }else{
          throw new Error(" invalid username");
        }
      })
      .then(json => {
        if (json.currentUser !== undefined && json.admin !== undefined ) {
          app.setState({ currentUser: json.currentUser , admin: json.admin});
          if (json.admin) {
            // go to admin
            request.props.history.push({
              pathname: "/Admin",
              state: {
                user: json.currentUser,
              },
            });
          } else {
            // go to home
            request.props.history.push({
              pathname: "/Home",
              state: {
                user: json.currentUser,
              },
            });
          }
        }
      })
      .catch(error => {
        console.log(error);
        log("failed to login");
        request.setState({
          msg: "" + error,
          msgColor: "red",
        });
      });


};

// ---------disable forgetPWD since we also don't know password in our database, we only have encrypted version.-------
// export const forgetPWD = (request) => {
//   // reset the msg
//   request.setState({
//     msg: "",
//   });
//   log("forgetPWD");
//   const username = request.state.userName
//   const new_request = new Request("/api/users/:" + username, {
//     method: "get",
//     headers: {
//       Accept: "application/json, text/plain, */*",
//       "Content-Type": "application/json"
//     }
//   });
//   // Send the request with fetch()
//   fetch(new_request).then(res => {
//     if (res.status === 200) {
//       return res.json();
//     } else{
//       throw new Error("")
//     }
//   })
//       .then(json => {
//         if (json.admin) {
//           // admin cannot forget password, and we don't want user know this is admin id
//           throw new Error("")
//         } else {
//           // tell them name directly for now
//           console.log(json);
//           request.setState({
//             msg: "We found your password! Your password is:   " + [json.password],
//             msgColor: "green",
//           });
//         }
//       })
//       .catch(error => {
//         console.log(error);
//         request.setState({
//           msg:
//               "Invalid username. Oh, Dear! Feels bad if you cannot even remember your user id!",
//           msgColor: "red",
//         });
//       });
// };

// A function to send a GET request to logout the current user
export const logout = (app) => {
  const url = "/users/logout";

  fetch(url)
      .then(res => {
        app.setState({
          currentUser: null,
          admin: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
};
