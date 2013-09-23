/*
		Model for retrive list of document.
*/
define('List',
				[
						"jquery",
						"underscore",
						"backbone",						
				],
function($, _, backbone){

			var listModel = {};
			
				//creating list backbone model.
			listModel =  Backbone.Model.extend({
						urlRoot:'/getlist',
						defaults:{
								id:'',
								name:'',
								age:''
						},
						initialize: function(){
										console.log('list model initialize.....');
						}
			});
		
			return listModel;

});
