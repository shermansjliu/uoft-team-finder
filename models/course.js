const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  courseCode: String,
  teams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
  ],
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = { Course };
