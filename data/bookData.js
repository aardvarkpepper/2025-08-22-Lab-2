// const bookSchema = new Schema({
//   title: {
//     type: String,
//     required: [true, 'Title is required.']
//   },
//   author: {
//     type: String,
//     required: [true, 'Author is required.']
//   },
//   isbn: {
//     type: mongoose.Schema.Types.ObjectId,
//     unique: true
//   },
//   publishedDate: Date,
//   inStock: {
//     type: Boolean,
//     default: true
//   }
// });
const bookData = [
  {
    title: 'Alpha Book',
    author: 'Alpha Author',
    isbn: 'Alpha ISBN',
    publishedDate: '2021-01-01',
    inStock: true,
  },
    {
    title: 'Bravo Book',
    author: 'Bravo Author',
    isbn: 'Bravo ISBN',
    publishedDate: '2022-02-02',
    inStock: true,
  },
    {
    title: 'Charlie Book',
    author: 'Charlie Author',
    isbn: 'Charlie ISBN',
    publishedDate: '2023-03-03',
    inStock: true,
  },
    {
    title: 'Delta Book',
    author: 'Delta Author',
    isbn: 'Delta ISBN',
    publishedDate: '2024-04-04',
    inStock: true,
  },
]

module.exports = {
  bookData
}