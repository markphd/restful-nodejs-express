# :neckbeard: Node.js Drill - RESTful Web Services

> ### “An ounce of practice is generally worth more than a ton of theory.” 
― Ernst F. Schumacher


### Setting up Gulp & Nodemon

```
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('STRING_taskname', function(){
  nodemon({
    'script': 'filename_ext',
    'ext' : '.ext',
    'env' : {
      PORT: 9999
    },
    'ignore': ['./path-to-directory']
  });
  .on('restart', function(req, res){
    console.log('Restarting...');
  });
});
```

### Connecting to DB via Mongoose
`var mongoose = require('mongoose')`
`mongoose.connect('mongodb://localhost/DB_NAME')`


### Import Dataset to MongoDB
`mongoimport --db bookAPI --collection books --file data.json --jsonArray`

