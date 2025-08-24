const connectMongoose = require('./db/connection');
const Book = require('./models/Book');
const mongoose = require('mongoose');


const bookHamster = new Book({
  title: "The Book Hamster",
  author: "The Author Hamster",
  //isbn: '65a41f62ca7ea39009340473', // BSONError: input must be a 24 character hex string, 12 byte Uint8Array, or an integer - ref https://amcereijo.medium.com/mongoose-objectid-the-small-detail-i-didnt-know-09130a64b6b0 for isbn
  // next, try not entering an ISBN, see if it's provided. also offing nonreq'd.
  publishedDate: '2025-08-22',
  inStock: true
});


const runTime = async () => {
  await connectMongoose();
  console.log('Presumably the Book model is ready to be used, if there were no error messages');
  await bookHamster.save();
  console.log('Supposedly bookHamster saved; to elim error did not save above as already saved.');
  
  // const retrieveData = await Book.find({isbn: '65a41f62ca7ea39009340473'});
  const retrieveData = await Book.find({title: 'The Book Hamster'});
  console.log('RetrieveData', retrieveData);

  // work OK with 'the book hamster, the author hamster

  console.log('Now attempting to update data'); // will the full object be required?  No?
  await Book.updateOne({isbn: '65a41f62ca7ea39009340473'}, {
    title: "The Hamster that Eats Books",
    author: 'A Hungry Hamster',
  });

  const retrieveData2 = await Book.find({isbn: '65a41f62ca7ea39009340473'});

  console.log('Attempting to retrieve modified data');
  console.log('RetrieveData 2', retrieveData2); // note:  it comes in an array.

  await Book.deleteOne({isbn: '65a41f62ca7ea39009340473'});
  console.log('Attempted to delete data.')

  const retrieveData3 = await Book.find({isbn: '65a41f62ca7ea39009340473'});
  console.log('RetrieveData3', retrieveData3);

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
