const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  teamName: String,
  teamDescription: String,
  teamCapacity: Number,
  teamLeader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Team = mongoose.model("Team", TeamSchema);

module.exports = { Team };
