// THE ESSENTIALS
var express = require('express'),
    app = express(),
    port = 9000,
    appRouter = express.Router();

// CONNECTION TO DB
var mongoose = require('mongoose'),
	db = mongoose.connect('mongodb://localhost/bookAPI'),
	// DATA MODEL
	Book = require('./models/bookModel');

app.use('/api', appRouter);

appRouter.route('/path')
  .get(function(req, res) {
    var responseJSON = { foo: 'bar'};
    res.json(responseJSON);
  })

appRouter.route('/Books')
  .get(function(req, res) {
  	Book.find(function(err, books){
  		if (err) return err
  		res.json(books);
  	})
  })

app.get('/', function(req, res) {
  res.send('Running server with Nodemon & Gulp')
})

app.listen(port, function(req, res) {
  console.log('Success!')
})