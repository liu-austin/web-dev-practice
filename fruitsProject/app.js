// jshint esversion:6

const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/fruitsDB';
mongoose.connect(url, { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name is specified."]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit( {
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit."
});

fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});
const Person = mongoose.model("Person", personSchema);

const person = new Person( {
  name: "John",
  age: 37
});

// person.save();

const grape = new Fruit( {
  name: "Grape",
  rating: 7,
  review: "Only good fresh."
});

const watermelon = new Fruit( {
  name: "Watermelon",
  rating: 5,
  review: "Only good on a hot day."
});

const peach = new Fruit( {
  name: "Peach",
  rating: 9,
  review: "One of the best."
});

// Fruit.insertMany([grape, watermelon, peach], function(err) {
//   if (err) {
//     console.log(err);
//   }
// });

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    console.log(fruits);
  }
});

Fruit.updateOne({_id: "id string"}, {name: "Peach"}, function(err){
  if (err) {
    console.log(err);
  }
});

Fruit.deleteOne({name: "Peach"}, function(err){
  if (err) {
    console.log(err);
  }
});

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Insert some documents
  collection.insertMany([{
      name: "Apple",
      score: 8,
      review: "Great fruit"
    },
    {
      name: "Orange",
      score: 6,
      review: "Kind of sour"
    },
    {
      name: "Banana",
      score: 9,
      review: "Great stuff"
    }
  ], function(err, results) {
    assert.equal(err, null);
    assert.equal(3, results.result.n);
    assert.equal(3, results.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(results);
  });
};

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits);
    callback(fruits);
  });
};
