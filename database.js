// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Raja:lxXnEs60DTTH2VK4@stealthcluster.3smqgus.mongodb.net/?retryWrites=true&w=majority"
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("Movies").collection("movies");
//   // perform actions on the collection object
//   console.log(collection)
//   client.close();
// });

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect("mongodb+srv://Raja:lxXnEs60DTTH2VK4@stealthcluster.3smqgus.mongodb.net/Movies?retryWrites=true&w=majority")
    .then( res => console.log('DB CONNECTED'))
    .catch(err => console.log('error', err))