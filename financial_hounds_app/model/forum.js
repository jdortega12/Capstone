const mongoose = require("mongoose");

const ForumSchema = new mongoose.Schema({
  year: {
    type: String,
    required: true,
  },
  students: {
    type:[String],
  },
  comments: {
    type:[String],
  },

});

const Forum = mongoose.model("Forum", ForumSchema);
module.exports = Forum;