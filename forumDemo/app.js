var mongoose = require('./db/connect');

var Todo = require('./models/todo');
var User = require('./models/user');

var express = require('express');
var bodyparser = require('body-parser');
var _ = require('lodash');

var app = express();
app.use(bodyparser.json());
//deploy
const port = process.env.PORT || 3000;


//routes
  //add todos
app.post('/todos', (req,res)=>{
  var todo = new Todo({text: req.body.text});
  todo.save((err,doc)=>{
    if (err) {
      console.log(err);
    }
    res.status(200).send(doc);
  });
});

  //show todos
app.get('/todos', (req,res)=>{
  Todo.find({}, (err,docs)=>{
    res.status(200).send(docs);
  });
});

  //user registration
app.post('/users', (req,res)=>{
  var body = _.pick(req.body, ['username', 'password']);
  var user = new User(body);
  user.save((err, user)=>{
    if (err) {
      res.send(err);
    }else{
      res.status(200).send(user);
    }
  });
});










app.listen(port, (err)=>{
  if (err) {
    console.log(err);
  }
  console.log(`server is running at ${port}`);
})
