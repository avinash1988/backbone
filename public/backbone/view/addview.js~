/*
		define add view 
*/

define('AddView', [
				"jquery",
				"underscore",
				"backbone",
			  'text!./template/add.html',
				"List"
], function($, _, backbone, tmpl, List){
			var addView = {};

			//creating add view here.
			addView = Backbone.View.extend({

					el : "#page-content",
	
					initialize: function(){
							this.template = _.template(tmpl);
					},

					//capture button click event
					events: {
						"click #back": "goBack",
						"click #addButton" : "addFunction"
					},

					render: function(){
							this.$el.html(this.template());
					},

					goBack: function(){
							var app = nameSpace.app;
							app.navigate('show',{trigger:true});
					},

					addFunction: function(){

							var listData = {
									name: $("#addName").val(),
									age: $("#addAge").val()
							};

							var list = new List({id:null});
							

							list.save(listData, {

										error: function(){
													//console.log("hehehhe");
										},

										success: function(){							
												var app = nameSpace.app;
												app.navigate('show',{trigger:true});
										}
							});

					}
			});
		
			return addView;

});
