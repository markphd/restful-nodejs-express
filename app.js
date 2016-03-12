var express = require('express'),
    app = express(),
    port = 9000,
    appRouter = express.Router();
    
app.use('/api', appRouter);

appRouter.route('/path')
  .get(function(req, res) {
    var responseJSON = { foo: 'bar'};
    res.json(responseJSON);
  })

app.get('/', function(req, res) {
  res.send('Running server with Nodemon & Gulp')
})

app.listen(port, function(req, res) {
  console.log('Success!')
})