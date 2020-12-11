const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  courseCode: String,
  description: { type: String, default: "This is a description." },
  image:String,
  teams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
  ],
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = { Course };
