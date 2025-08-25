const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/', bookController.createBook);

router.get('/', bookController.getAllBooks);

router.get('/:id', bookController.getBook);

router.put('/:id', bookController.updateBook);

router.delete('/:id', bookController.deleteBook);
 
module.exports = router;

/**
 * In the routes/ directory, create a bookRoutes.js file.
Use express.Router() to create a new router instance.
Implement the five core CRUD endpoints on this router:
Create: POST / - Creates a new book using the data in req.body.
Read All: GET / - Retrieves all books from the database.
Read One: GET /:id - Retrieves a single book by its _id.
Update: PUT /:id - Updates a book by its _id using the data in req.body.
Delete: DELETE /:id - Deletes a book by its _id.
Use async/await and try...catch blocks in all routes to handle errors.
Export the router.
 */

