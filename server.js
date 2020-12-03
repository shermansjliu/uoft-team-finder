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

//Import local environment variables
require("dotenv").config();

// to validate object IDs
const { ObjectID } = require("mongodb");

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// express-session for managing user sessions
const session = require("express-session");
const { mongo } = require("mongoose");
app.use(bodyParser.urlencoded({ extended: true }));

mongo.connect(
  process.env.MONGO_URI,
  //   "mongodb+srv://shermansjliu:csc309team04@cluster0.f7u4c.mongodb.net/Cluster0?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
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
      expires: 60000,
      httpOnly: true,
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
      res.send({ currentUser: user.username });
    })
    .catch((error) => {
      res.status(400).send();
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

/*********************************************************/

/*** API Routes below ************************************/
// User API Route
app.post("/api/users", mongoChecker, async (req, res) => {
  log(req.body);

  // Create a new user
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  try {
    // Save the user
    const newUser = await user.save();
    res.send(newUser);
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

// a GET route to get all users
app.get("/api/users", mongoChecker, authenticate, async (req, res) => {
  // Get the students
  try {
    const users = await User.find();
    res.send(users); // just the array
  } catch (error) {
    log(error);
    res.status(500).send("Internal Server Error");
  }
});

// API routes can go here...

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
