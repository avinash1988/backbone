//define app.js to start Route of backbone.js
var nameSpace = {};
define('App', [
				'jquery',
				'underscore',
				'backbone',
				'Router',
				'List'
			 ], 
function($, _ , backbone, Router, listModel){

  function initialize() {

    // Start the path Router
    var app = new Router();
		nameSpace.app = app;
		//delete record
		app.on("route:deleteRecord", function(id){
						//delete table row
						var deleteModel = new listModel({id:id});

						//sending delete request to server.
						deleteModel.destroy({
										error: function(){
												alert("Sorry Unable to delete data.!!!!");
										},
										success: function(){
												app.navigate('show',{trigger:true});
										}
						});
		}) 




    // Enable url # enabled history
    Backbone.history.start();
  }
  
  return {
    initialize: initialize
  };
});
