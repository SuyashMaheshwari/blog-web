var express = require('express');
var router = express.Router();
var db = require('../db')
var user = require('../model/user')

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/register')
.get((req,res)=>{
  res.render('register')
})
.post((req,res,next)=>{
  user.create(req.body).then((user)=>{
    console.log('user created', user);
    res.statusCode=200;
    res.setHeader('Content-type','application/json')
    res.render('login')
  },(err)=>next(err))
  .catch((err)=>next(err))
})


module.exports = router;
