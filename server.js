const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');

const connectMongoose = require('./db/connection');
const Book = require('./models/Book');
const mongoose = require('mongoose');
const bookData = require('./data/bookData');

const PORT = 3000;

app.use(express.json());
app.use('/api/books', bookRoutes)

const runTime = async () => {
  await connectMongoose();
  // console.log('Presumably the Book model is ready to be used, if there were no error messages');
  // await bookHamster.save();
  // console.log('Supposedly bookHamster saved; to elim error did not save above as already saved.');
  
  // const retrieveData = await Book.find({isbn: '65a41f62ca7ea39009340473'});
  // const retrieveData = await Book.find({title: 'The Book Hamster'});
  // console.log('RetrieveData', retrieveData);

  // work OK with 'the book hamster, the author hamster

  // console.log('Now attempting to update data'); // will the full object be required?  No?
  // await Book.updateOne({isbn: '65a41f62ca7ea39009340473'}, {
  //   title: "The Hamster that Eats Books",
  //   author: 'A Hungry Hamster',
  // });

  // const retrieveData2 = await Book.find({isbn: '65a41f62ca7ea39009340473'});

  // console.log('Attempting to retrieve modified data');
  // console.log('RetrieveData 2', retrieveData2); // note:  it comes in an array.

  // await Book.deleteOne({isbn: '65a41f62ca7ea39009340473'});
  // console.log('Attempted to delete data.')

  // const retrieveData3 = await Book.find({isbn: '65a41f62ca7ea39009340473'});
  // console.log('RetrieveData3', retrieveData3);

  // works OK with 'The Hamster that Eats Books, A Hungry Hamster'
}

runTime();

//const allBooks = await Book.find({});
/**
 * Experiment with the model by creating a new book, querying for books you have created, and updating or deleting them.
 * https://mongoosejs.com/docs/models.html
 * 
 * const bookSchema = new Schema({
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
 */



/**
 * Alternatively
 * await Book.create({objectdata});
 */

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));