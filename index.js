const express = require('express');
const cors = require('cors');
const app = express();
const Movie = require('./models/movie')
const port = 5000;
require('./database')

app.use(express.json());
app.use(cors());


app.route('/getMoviesList').get((req, res) => {
    Movie.find()
        .then(movies => {
            res.status(200)
            res.send({data : movies})
        })
        .catch(err => {
            res.status(500)
            console.log(err)
        })
})

app.route('/getMovie').get((req, res) => {
    const movieName = req.body.movieName
    Movie.findOne({movieName : movieName})
        .then(movie => {
            res.status(200)
            res.send({data : movie})
        })
        .catch(err => {
            res.status(500)
            console.log(err)
        })
})

app.route('/addMovie').post((req, res) => {
    const {movieName, rating, cast, genre, releaseDate} = req.body;
    const movieInstance = new Movie({movieName,
        rating,
        cast,
        genre,
        releaseDate});
    movieInstance.save()
        .then(movie => {
            res.status(200)
            res.send({data : movie})
        })
        .catch(err => {
            res.status(500)
            console.log(err)
        })
})

app.route('/updateMovie/:name').put((req, res) => {
    Movie.updateOne({movieName : req.params.name}, { $set: req.body})
        .then(movie => {
            res.status(200)
            res.send({data : movie})
        })
        .catch(err => {
            res.status(500)
            console.log(err)
        })
})

app.route('/deleteMovie').delete((req, res) => {
    const movieName = req.body.movieName;
    Movie.deleteOne({movieName : movieName})
        .then(movie => {
            res.status(200)
            res.send({data : movie})
        })
        .catch(err => {
            res.status(500)
            console.log(err)
        })
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});