
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();
var obj = {};
		obj.arr = [
									{id:1, name:"avinash kumar", age:25},
									{id:2, name:"nivash kumar", age:25},
									{id:3, name:"sunil kumar", age:25},
									{id:4, name:"charan kumar", age:25},

							];

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

//get list of record.
app.get('/list', function(req, res){
		res.json(obj.arr);
});

//record delete request.
app.delete("/getlist/:id", function(req, res){

			var arr = [];
			for(var i = 0; i< obj.arr.length; i++){
						if(parseInt(req.param("id")) !== obj.arr[i].id){
									arr.push(obj.arr[i]);
						}
			}
			
			obj.arr = arr;
			res.json({"success":"true"});
});


//creating new record
app.post("/getlist", function(req, res){

			var length  = obj.arr.length;
			obj.arr.push({id:length+1, name:req.body.name, age:req.body.age});
			res.json({"success":true});

});

//update record.
app.put("/getlist/:id", function(req, res){

			var arr = [];
			for(var i = 0; i< obj.arr.length; i++){
						if(parseInt(req.param("id"), 10) !== obj.arr[i].id){
									arr.push(obj.arr[i]);
						}
						else{
									arr.push({
											id:req.param("id"),
											name:req.param("name"),
											age:req.param("age"),
									});
						}
			}
			
			obj.arr = arr;
			res.json({"success":"true"});

});



//login request.
app.post('/login', function(req, res){

			var loginObject = {};
			if(req.body.username === 'avinash' && req.body.password === 'welcome'){
					loginObject.success = true;
			}
			else{
					loginObject.success = false;
			}
			res.json(loginObject);

});

app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
