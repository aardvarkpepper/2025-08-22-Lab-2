const mongoose = request('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URI;

export const connectMongoose = () => {
  mongoose.connect(uri)
    .then(() => console.log('Successfully connected to MongoDB!'))
    .catch(err => console.error('Connection error', err));
}
