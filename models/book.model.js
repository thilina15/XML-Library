const mongoose = require("mongoose");
const { Schema, Mongoose } = require("mongoose");

const bookSchema = new Schema(
  {
    description: {
      type: String, //data type
      required: true, //not null
    },
    title: {
      type: String, //data type
      required: true, //not null
    },
    date: {
      type: String, //data type
      required: true, //not null
    },

  },
  { timestamps: true }
);

const Book = mongoose.model("News", bookSchema);
module.exports = Book;
