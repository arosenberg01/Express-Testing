var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

var adminRouter = express.Router();

adminRouter.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
})

adminRouter.get('/', function(req, res) {
	res.send('I am the dashboard');
});

adminRouter.get('/users', function(req, res) {
	res.send('I show all the users');
});

adminRouter.get('/posts', function(req, res) {
  res.send('I show all the posts')
});

adminRouter.get('/users/:name', function(req, res) {
  res.send('hello ' + req.params.name + '!');
})



app.use('/admin', adminRouter);

app.listen(1337);

console.log('Listening on port 1337');