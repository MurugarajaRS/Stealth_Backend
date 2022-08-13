const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    movieName: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    cast: {
        type: Array,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    }
})
module.exports = mongoose.model("Movie", movieSchema, "movies")