const mongoose = require("mongoose");

const { Schema } = mongoose;
const NoteSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  tag: {
    type: String,
    default: "General",
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model("notes", NoteSchema);
