const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect('mongodb://localhost:27017/Humora') 
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((err) => {
            console.error('Error connecting to MongoDB:', err);
        });
}

module.exports = connectDB;
