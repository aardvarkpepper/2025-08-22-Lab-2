const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required.']
  },
  author: {
    type: String,
    required: [true, 'Author is required.']
  },
  isbn: {
    type: mongoose.Schema.Types.ObjectId,
    unique: true
  },
  publishedDate: Date,
  inStock: {
    type: Boolean,
    default: true
  }
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;