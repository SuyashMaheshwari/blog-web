var express = require('express');
var router = express.Router();
var post = require('../model/posts')

router.route('/')
.get((req,res,next)=>{
    post.find({})
    .then((posts)=>{
        res.statusCode =200
        res.setHeader('content-type','application/json')
        res.json(posts)
    },(err)=>next(err))
    .catch((err)=>next(err))
})
.post((req,res,next)=>{
    post.create(req.body)
    .then((post)=>{
        res.statusCode =200
        res.setHeader('content-type','application/json')
        res.json(post)
    },(err)=>next(err))
    .catch((err)=>next(err))
})

router.route('/:postId')
.get((req,res,next)=>{
    post.findById(req.params.postId)
    .then((posts)=>{
        res.statusCode =200
        res.setHeader('content-type','application/json')
        res.json(posts)
    },(err)=>next(err))
    .catch((err)=>next(err))
})
.put((req,res,next)=>{
    post.findByIdAndUpdate(req.params.postId)
    .then((post)=>{
        res.statusCode =200
        res.setHeader('content-type','application/json')
        res.json(post)
    },(err)=>next(err))
    .catch((err)=>next(err))
})
.delete((req,res,next)=>{
    post.findByIdAndDelete(req.params.postId)
    .then((post)=>{
        res.statusCode =200
        res.setHeader('content-type','application/json')
        res.json(post)
    },(err)=>next(err))
    .catch((err)=>next(err))
})

router.route('/:postId/comment')
.get((req,res,next)=>{
    post.findById(req.params.postId)
    .then((post)=>{
        res.statusCode =200
        res.setHeader('content-type','application/json')
        res.json(post.comments)
    },(err)=>next(err))
    .catch((err)=>next(err))
})
.post((req,res,next)=>{
    post.findById(req.params.postId)
    .then((post)=>{
        post.comment.push(req.body)
        post.save()
        .then((post)=>{

            res.statusCode =200
            res.setHeader('content-type','application/json')
            res.json(post.comments)
        },(err)=>next(err))
        .catch((err)=>next(err))
    },(err)=>next(err))
    .catch((err)=>next(err))
})
.put((req,res,next)=>{
    post.findByIdAndUpdate(req.params.postId)
    .then((post)=>{
        res.statusCode =200
        res.setHeader('content-type','application/json')
        res.json(post)
    },(err)=>next(err))
    .catch((err)=>next(err))
})
.delete((req,res,next)=>{
    post.findByIdAndDelete(req.params.postId)
    .then((post)=>{
        res.statusCode =200
        res.setHeader('content-type','application/json')
        res.json(post)
    },(err)=>next(err))
    .catch((err)=>next(err))
})

module.exports = router