const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
const dishIdRouter = express.Router();

dishIdRouter.use(bodyParser.json());
dishRouter.use(bodyParser.json());


dishRouter.route('/')
.all((req, res, next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) =>{
    res.end('Will sendbnbjkj dishes to you.');
})
.post((req,res,next)=>{
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req,res,next) =>{
    res.end('Deleting all the dishes.');
});

dishIdRouter.route('dishes/:dishId')
.all((req, res, next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) =>{
    res.end('Will send all the dishes to you.');
})
.post((req,res,next)=>{
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req,res,next) =>{
    res.end('Deleting all the dishes.');
});

module.exports = dishRouter;