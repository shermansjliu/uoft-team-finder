/* server.js for react-express-authentication */
"use strict";
const log = console.log;

const express = require("express");
// starting the express server
const app = express();
const path = require("path");

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");
mongoose.set("useFindAndModify", false); // for some deprecation issues

// import the mongoose models
const { User } = require("./models/user");
const { Course } = require("./models/course");
const { Team } = require("./models/team");

//Import local environment variables
require("dotenv").config();

// to validate object IDs
const { ObjectID } = require("mongodb");

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

// express-session for managing user sessions
const session = require("express-session");
const { mongo } = require("mongoose");
app.use(bodyParser.urlencoded({ extended: true }));

function isMongoError(error) {
  // checks for first error returned by promise rejection if Mongo database suddently disconnects
  return (
    typeof error === "object" &&
    error !== null &&
    error.name === "MongoNetworkError"
  );
}

// middleware for mongo connection error for routes that need it
const mongoChecker = (req, res, next) => {
  // check mongoose connection established.
  if (mongoose.connection.readyState != 1) {
    log("Issue with mongoose connection");
    res.status(500).send("Internal server error");
    return;
  } else {
    next();
  }
};

// Middleware for authentication of resources
const authenticate = (req, res, next) => {
  if (req.session.user) {
    User.findById(req.session.user)
      .then((user) => {
        if (!user) {
          res.status(404).send("Missing resource");
          return Promise.reject();
        } else {
          req.user = user;
          next();
        }
      })
      .catch((error) => {
        res.status(401).send("Unauthorized");
      });
  } else {
    res.status(401).send("Unauthorized");
  }
};

/*** Session handling **************************************/
// Create a session and session cookie
app.use(
  session({
    secret: "our hardcoded secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 2, //Two hour expiration
      httpOnly: true, //Makes cookie servers die only (default by true)
    },
  })
);

// A route to login and create a session
app.post("/users/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // log(username, password);
  // Use the static method on the User model to find a user
  // by their username and password
  User.findByUsernamePassword(username, password)
    .then((user) => {
      // Add the user's id to the session.
      // We can check later if this exists to ensure we are logged in.
      req.session.user = user._id;
      req.session.username = user.username; // we will later send the username to the browser when checking if someone is logged in through GET /check-session (we will display it on the frontend dashboard. You could however also just send a boolean flag).
      // req.session.admin = user.admin;
      req.session.admin = true;
      res.send({ currentUser: user.username });
    })
    .catch((error) => {
      res.status(400).send();
      //TODO prompt Invalid Login in front end
    });
});

// A route to logout a user
app.get("/users/logout", (req, res) => {
  // Remove the session
  req.session.destroy((error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send();
    }
  });
});

// A route to check if a user is logged in on the session
app.get("/users/check-session", (req, res) => {
  if (req.session.user) {
    res.send({ currentUser: req.session.username });
  } else {
    res.status(401).send();
  }
});

// A route to check if a user is logged in on the session
app.get("/users/get-current-user", (req, res) => {
  if (req.session.user) {
    res.send({ currentUser: req.session.user });
  } else {
    res.status(401).send();
  }
});

/*********************************************************/
/*** API Routes below ************************************/
// a GET route to get all users
app.get("/api/users", mongoChecker, async (req, res) => {
  // Get the students
  try {
    const users = await User.find();
    res.send(users); // just the array
  } catch (error) {
    log(error);
    res.status(498).send("Internal Server Error");
  }
});

app.get("/api/users/:id", mongoChecker, async (req, res) => {
  // Get the students
  try {
    const users = await User.findById(req.params.id);
    res.send(users); // just the array
  } catch (error) {
    log(error);
    res.status(498).send("Internal Server Error");
  }
});

// User API Route
app.post("/api/users", mongoChecker, async (req, res) => {
  // Create a new user
  //   if (!req.session.admin) {
  //     res.status(401).send("User not Authorized");
  //     return;
  //   }
  const user = new User(req.body);

  try {
    // Save the user
    const newUser = await user.save();
    res.status(200).send(newUser);
  } catch (error) {
    if (isMongoError(error)) {
      // check for if mongo server suddenly disconnected before this request.
      res.status(500).send("Internal server error");
    } else {
      log(error);
      res.status(400).send("Bad Request"); // bad request for changing the student.
    }
  }
});

/*
Params: user id that will be edited

body {
  New data that will updated the user
}
 */
app.put("/api/users/:id", mongoChecker, authenticate, async (req, res) => {
  if (!req.session.admin) {
    res.status(401).send("User not authorized");
    return;
  }
  try {
    let user = await User.findByIdAndRemove(req.params.id);
    if (!user) {
      res.status(404).send("Missing resource");
    } else {
      user = {
        ...user,
        ...req.body.data,
      };
      const updatedUser = await user.save();
      res.status(200).send(updatedUser);
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

/*
Params: deleted user id
body {

    username: username of deleted user
    password: pwd of deleted user
}
send {deletedUser}
 */

app.delete("/api/users/:id", mongoChecker, authenticate, async (req, res) => {
  if (!req.session.admin) {
    res.status(401).send("User not authorized");
    return;
  }
  try {
    const delUser = await User.findByIdAndRemove(req.params.id);
    if (!delUser) {
      res.status(404).send("Missing resource");
    } else {
      res.status(200).send(delUser);
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

/*
params: id
send: course with corresponding id
 */
app.get("/api/courses/:id", mongoChecker, authenticate, async (req, res) => {
  try {
    const course = await Course.findOne({ _id: req.params.id });
    if (!course) {
      res.status(404).send("Resource not Found");
    } else {
      res.status(200).send(course);
    }
  } catch (error) {
    res.status(500).send("Internal Server Error`");
  }
});

/*
parmas: code - course Code

* */
app.post("/api/courses/:code", mongoChecker, authenticate, async (req, res) => {
  if (!req.session.admin) {
    res.status(401).send("User is not authenticated");
    return;
  }

  const course = Course.create({
    courseCode: req.params.code,
    teams: [],
  });
  try {
    const savedCourse = course.save();
    res.status(200).send(savedCourse);
  } catch (error) {
    res.status(500).send("Internal Server error");
  }
});

/*
params: id - the course being edited
body {
    courseCode: new Course code,
    teams: list of new teams
}
send: updated sub document
*/
app.put("/api/courses/:id", mongoChecker, authenticate, async (req, res) => {
  if (!req.session.admin) {
    res.status(401).send("User is not authenticated");
    return;
  }
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      res.status(404).send("Resource not found");
    } else {
      course.courseCode = req.body.courseCode;
      course.teams = req.body.teams;
    }
    const updatedCourse = await course.save();
    res.status(200).send(updatedCourse);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

// params: id - the course being deleted
//Send: {deletedCourse: <deletedCourse>, courses: <updated Courses document>}
app.delete("/api/courses/:id", mongoChecker, authenticate, async (req, res) => {
  if (!req.session.admin) {
    res.status(401).send("User is not authenticated");
    return;
  }

  try {
    const deletedCourse = Course.findByIdAndRemove();
    if (!deletedCourse) {
      res.status(404).send("Resource not found");
    } else {
      const courses = await Course.find();
      res.status(200).send({ deletedCourse: deletedCourse, Courses: courses });
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
/*
params team_id

send: all teams
 */
app.get("/api/teams/", mongoChecker, async (req, res) => {
  try {
    const team = await Team.find().populate("teamLeader").populate("members");
    if (!team) {
      res.status(404).send("Missing resource");
    } else {
      res.status(200).send(team);
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

app.get("/api/teams/:team_id", mongoChecker, async (req, res) => {
  try {
    const team = await Team.findById(req.params.team_id)
      .populate("teamLeader")
      .populate("members");
    if (!team) {
      res.status(404).send("Missing resource");
    } else {
      res.status(200).send(team);
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

/*
params: course_id
body{
 proper parameters of a team
}
send: {team: <created team sub document> course: <updated course sub document>
* */
app.post("/api/teams:course_id", mongoChecker, async (req, res) => {
  try {
    const course = Course.findById(req.params.course_id);
    if (!course) {
      res.status(404).send("Missing Resource");
      return;
    }
    const team = new Team(req.body);
    const savedTeam = await team.save();
    course.teams.new(req.body);
    if (!savedTeam) {
      res.status(400).send("Bad Parameter Input");
    } else {
      res.status(200).send({ team: savedTeam, course: course });
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.post("/api/teams", mongoChecker, async (req, res) => {
  try {
    const team = new Team(req.body);
    const savedTeam = await team.save();
    if (!savedTeam) {
      res.status(400).send("Bad Parameter Input");
    } else {
      res.status(200).send(savedTeam);
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

/*
params: team_id
Body: New team attributes
send : Updated team sub document
 */
app.put("/api/teams/:team_id", async (req, res) => {
  // if (!res.session.admin) {
  //   res.status(401).send("user is not authorized");
  // } else {
  try {
    let team = await Team.findById(req.params.team_id);
    console.log(team);
    if (!team) {
      res.status(404).send("Missing resource");
    } else {
      //Spread operator creates a new object, but _id property is not updated so save updates original sub document4
      team = {
        ...team,
        ...req.body,
      };
      const updatedTeam = await team.save();
      res.status(200).send(updatedTeam);
    }
  } catch (error) {
    res.status(500).send("internal server error");
  }
  // }
});

// add user to team
app.put("/api/teams/add/:team_id/:user_id", async (req, res) => {
  // if (!res.session.admin) {
  //   res.status(401).send("user is not authorized");
  // } else {
  try {
    let team = await Team.findById(req.params.team_id);
    let user = await User.findById(req.params.user_id);
    if (!team || !user) {
      res.status(404).send("Missing resource");
    } else {
      //Spread operator creates a new object, but _id property is not updated so save updates original sub document4
      team.members.push(req.params.user_id);
      user.teams.push(req.params.team_id);
      const updatedTeam = await team.save();
      const updatedUser = await user.save();
      res.status(200).send({ team: updatedTeam, user: updatedUser });
    }
  } catch (error) {
    res.status(500).send("internal server error");
  }
  // }
});

// remove user from team
app.put("/api/teams/delete/:team_id/:user_id", async (req, res) => {
  // if (!res.session.admin) {
  //   res.status(401).send("user is not authorized");
  // } else {
  try {
    let team = await Team.findById(req.params.team_id);
    let user = await User.findById(req.params.user_id);
    if (!team || !user) {
      res.status(404).send("Missing resource");
    } else {
      team.members.splice(team.members.indexOf(req.params.user_id), 1);
      user.teams.splice(user.teams.indexOf(req.params.team_id), 1);
      console.log(team.members, user.teams);
      const updatedTeam = await team.save();
      const updatedUser = await user.save();
      res.status(200).send({ team: updatedTeam, user: updatedUser });
    }
  } catch (error) {
    res.status(500).send("internal server error");
  }
  // }
});

// assign new team leader
app.put("/api/teams/new_leader/:team_id/:user_id", async (req, res) => {
  // if (!res.session.admin) {
  //   res.status(401).send("user is not authorized");
  // } else {
  try {
    let team = await Team.findById(req.params.team_id);
    if (!team) {
      res.status(404).send("Missing resource");
    } else {
      team.teamLeader = req.params.user_id;
      const updatedTeam = await team.save();
      res.status(200).send({ team: updatedTeam });
    }
  } catch (error) {
    res.status(500).send("internal server error!");
  }
  // }
});

// change teamName, teamCapacity, or teamDescription
app.put("/api/teams/:team_id/:attribute/:value", async (req, res) => {
  // if (!res.session.admin) {
  //   res.status(401).send("user is not authorized");
  // } else {
  try {
    let team = await Team.findById(req.params.team_id);
    if (!team) {
      res.status(404).send("Missing resource");
    } else {
      if (req.params.attribute === "teamName") {
        team.teamName = req.params.value;
      } else if (req.params.attribute === "teamDescription") {
        team.teamDescription = req.params.value;
      } else if (req.params.attribute === "teamCapacity") {
        team.teamCapacity = req.params.value;
      }
      const updatedTeam = await team.save();
      res.status(200).send({ team: updatedTeam });
    }
  } catch (error) {
    res.status(500).send("internal server error!");
  }
  // }
});

/*
 params: team_id

 send: The team that was deleted
 */
app.delete("/api/teams/:team_id", async (req, res) => {
  // if (!res.session.admin) {
  //   res.status(401).send("user is not authorized");
  // } else {
  try {
    let team = await Team.findByIdAndRemove(req.params.team_id);
    if (!team) {
      res.status(404).send("Missing resource");
    } else {
      res.status(200).send(team);
    }
  } catch (error) {
    res.stats(500).send("Internal server error");
  }
  // }
});

/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(path.join(__dirname, "/app/build")));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
  // check for page routes that we expect in the frontend to provide correct status code.
  const goodPageRoutes = [
    "/",
    "/Home",
    "/Course",
    "/Team",
    "/Profile",
    "/Admin",
    "/CourseAdmin",
    "/teamAdmin",
    "/AdminUsers",
  ];
  if (!goodPageRoutes.includes(req.url)) {
    // if url not in expected page routes, set status to 404.
    res.status(404);
  }

  // send index.html
  res.sendFile(path.join(__dirname, "/app/build/index.html"));
});
/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
  log(`Listening on port ${port}...`);
});
