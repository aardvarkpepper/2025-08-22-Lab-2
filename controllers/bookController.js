const Book = require('../models/Book');


// // Find all users in the collection
// const allUsers = await User.find({});

// // Find one user by their username
// const specificUser = await User.findOne({ username: 'jane_doe' });


const createBook = async (req, res) => {
  res.status(201).json({ message: 'User created' });
};

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    res.json(allBooks);
  } catch (error) {
    console.error(error, error.status, error.message); // might not have .status and .message.
    res.status(500).json({ error: error.message });
  }
};

const getBook = async (req, res) => {
  const bookId = req.params.id;
  try {
    const aBook = await Book.findOne({ isbn: bookId });
    res.json(aBook);
  } catch (error) {
    console.error(error, error.status, error.message); // might not have .status and .message.
    res.status(500).json({ error: error.message });
  }
};

const updateBook = async (req, res) => {
  const bookId = req.params.id;
  try {
    const allBooks = await Book.findOne({});
    const users = [{ id: 1, name: 'John Doe' }];
    res.json(users);
  } catch (error) {

  }
};

const deleteBook = async (req, res) => {
  const bookId = req.params.id;
  try {
    const allBooks = await Book.findOne({});
    const users = [{ id: 1, name: 'John Doe' }];
    res.json(users);
  } catch (error) {

  }
};

// Export an object containing the functions
module.exports = {
  getAllUsers,
  createUser,
};

/**
 * Use express.Router() to create a new router instance.
Implement the five core CRUD endpoints on this router:
Create: POST / - Creates a new book using the data in req.body.
Read All: GET / - Retrieves all books from the database.
Read One: GET /:id - Retrieves a single book by its _id.
Update: PUT /:id - Updates a book by its _id using the data in req.body.
Delete: DELETE /:id - Deletes a book by its _id.
Use async/await and try...catch blocks in all routes to handle errors.
 */


let currentIndex = 0;
let bookData = [
  {
    title: 'All Things Great And Small',
    author: 'Alan Quartermain',
    isbn: '1wakas',
    publishedDate: '1980-01-02',
    inStock: true
  },
  {
    title: 'Boxcars of the Eighteenth Century',
    author: 'Boba Fett',
    isbn: '2wakas',
    publishedDate: '2015-01-02',
    inStock: true
  },
  {
    title: 'Cats of the Steppe',
    author: 'Cory Capelli',
    isbn: '3wakas',
    publishedDate: '2025-01-02',
    inStock: true
  },
]