var express = require('express'),
    app = express(),
    port = 9000;

var appRouter = express.Router();

app.get('/', function(req, res) {
  res.send('Running server with Nodemon & Gulp')
})

appRouter.route('/path')
  .get(function(req, res) {
    var responseJSON = { foo: 'bar'};

    res.json(responseJSON);
  })

app.use('/api', appRouter);

app.listen(port, function(req, res) {
  console.log('Success!')
})
