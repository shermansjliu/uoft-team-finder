const mongoose = require("mongoose");

const ExpSchema = new mongoose.Schema({
  expName: String,
  description: String,
  image: String,
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  admin: Boolean,
  name: String,
  major: String,
  description: String,
  year: String,
  cGPA: String,
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  teams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
  ],
  exps: [ExpSchema],
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };
