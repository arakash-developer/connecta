const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    publishedDate: Date,
    image: String,
});

module.exports = mongoose.model('story', storySchema);