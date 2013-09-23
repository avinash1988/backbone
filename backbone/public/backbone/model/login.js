/*
		Model for login.
*/
define('Login',
				[
						"jquery",
						"underscore",
						"backbone",						
				],
function($, _, backbone){

			var loginModel = {};
			
				//creating login backbone model.
			loginModel =  Backbone.Model.extend({
						urlRoot:'/login',
						defaults:{
								username:'',
								password:''
						},
						initialize: function(){
										console.log('Login model initialize.....');
						}
			});
		
			return loginModel;

});
