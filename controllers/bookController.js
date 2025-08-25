const Book = require('../models/Book');

let currentIndex = 0;
let bookData = [
  {
    "title": "All Things Great And Small",
    "author": "Alan Quartermain",
    "isbn": "1wakas",
    "publishedDate": "1980-01-02",
    "inStock": true
  },
  {
    "title": "Boxcars of the Eighteenth Century",
    "author": "Boba Fett",
    "isbn": "2wakas",
    "publishedDate": "2015-01-02",
    "inStock": true
  },
  {
    "title": "Cats of the Steppe",
    "author": "Cory Capelli",
    "isbn": "3wakas",
    "publishedDate": "2025-01-02",
    "inStock": true
  },
]

/**
 * 'createBook' needs to reference data, without data being provided.
 */
const createBook = async (req, res) => {
  Book.create(req.body) // req.body instead of req.book for Postman; = { title: x, author: y, etc.}
  .then(createdBook => {
    console.log('Book created successfully:', createdBook);
    res.status(201).json({ message: `Book created, ${JSON.stringify(createdBook)}` });
  })
  .catch (err => {
    console.error('Error creating book:', err);
    res.status(500).json({ message: 'Unspecified error when creating book.' });
  })
};

const getAllBooks = async (req, res) => {
  Book.find({})
  .then(allBooks => {
    console.log('All books in collection:', allBooks); // always an array, I assume.  Could be null, I assume.
    res.status(200).json({ message: `All books: ${JSON.stringify(allBooks)}` });
  })
  .catch (err => {
    console.error('Error retrieving all books:', err);
    res.status(500).json({ message: 'Unspecified error when retrieving all books.' });
  })
  // try {
  //   const allBooks = await Book.find({});
  //   res.json(allBooks);
  // } catch (error) {
  //   console.error(error, error.status, error.message); // might not have .status and .message.
  //   res.status(500).json({ error: error.message });
  // }
};

const getBook = async (req, res) => {
  const bookId = req.params.id;
  // presumably we have to ID to work with because front end input is working off a list that includes IDs.  It is presumed the user is not directly manipulating the database.
  Book.findById(bookId)
  .then(book => {
    console.log('Found book:', book); // always an array, I assume.  Could be null, I assume.
    res.status(200).json({ message: `Found book: ${JSON.stringify(book)}` });
  })
  .catch (err => {
    console.error('Error retrieving book:', err);
    res.status(500).json({ message: `Unspecified error when retrieving book with ID ${bookId}` });
  })
  // try {
  //   const aBook = await Book.findOne({ isbn: bookId });
  //   res.json(aBook);
  // } catch (error) {
  //   console.error(error, error.status, error.message); // might not have .status and .message.
  //   res.status(500).json({ error: error.message });
  // }
};

const updateBook = async (req, res) => {
  const bookId = req.params.id;
  const options = { new: true };
  Book.findByIdAndUpdate(bookId, req.body, options)
  .then(updatedBook => {
    console.log('Book updated:', updatedBook); // always an array, I assume.  Could be null, I assume.
    res.status(200).json({ message: `Updated book: ${JSON.stringify(updatedBook)}` });
  })
  .catch (err => {
    console.error('Error updating book:', err);
    res.status(500).json({ message: `Unspecified error when updating book with ID ${bookId}` });
  })
  // try {
  //   const allBooks = await Book.findOne({});
  //   const users = [{ id: 1, name: 'John Doe' }];
  //   res.json(users);
  // } catch (error) {

  // }
};

const deleteBook = async (req, res) => {
  const bookId = req.params.id;
  Book.findByIdAndDelete(bookId)
  .then(deletedBook => {
    if (deletedBook) {
      console.log('Successfully deleted book:', deletedBook.title)
      res.status(200).json({ message: `Deleted book: ${JSON.stringify(deletedBook)}` });
    } else {
      console.log('Could not find book to delete.')
      res.status(200).json({ message: `Book with ${bookId} could not be found to be deleted.` });
    }
  })
  .catch (err => {
    console.error('Error deleting book:', err);
    res.status(500).json({ message: `Unspecified error when deleting book with ID ${bookId}` });
  })
  // try {
  //   const allBooks = await Book.findOne({});
  //   const users = [{ id: 1, name: 'John Doe' }];
  //   res.json(users);
  // } catch (error) {

  // }
};

// Export an object containing the functions
module.exports = {
  createBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook
};