const mongoose = require("mongoose");

const LoggedInUserSchema = new mongoose.Schema({
  admin: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const LoggedInUser = mongoose.model("LoggedInUser", LoggedInUserSchema);

module.exports = { LoggedInUser };
