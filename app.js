var express = require('express');
var cors = require('cors');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var morgan=require('morgan');
var app = require('express')();
var http=require('http').Server(app);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

http.listen(8888,function(){

console.log('listening to port 8888');

} );
app.get('/',function(req,res)
{
	res.send('hello ashan');
var anx = new Cars();
anx.car_type= "sooooobu";
anx.description = "clicked";
anx.pickup_time =""; 
 
 	anx.save();


});
