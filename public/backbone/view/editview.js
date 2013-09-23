/*
			Edit view of backbone.js
*/
var editId = '';
define('EditView', [
			"jquery",
			"underscore",
			"backbone",
			'text!./template/edit.html',
			'ListCollection',
			'List'	,
], function($, _ , backbone, tmpl, listCollection, List){
			var editView = {};
			
			//creating edit view here.
			editView = Backbone.View.extend({
					el:'#page-content',

					initialize: function(){
							this.template = _.template(tmpl);
					},

					//events capture.
					events:{
							"click #cancelButton": "cancelFunction",
							"click #saveButton": "saveFunction"
					},

					render: function(id){

										editId = id;
										var collection = new listCollection();
										var viewObj = this;
										collection.fetch({
													error: function(){
															//console.log("error");
													},
													success:function(){
															//console.log("success");
													}
										}).complete(function(){

													var model = collection.get(id);			
													//creating new model
													var editRow = new List();
													editRow.set({id: model.get("id"), name:model.get("name"), age: model.get("age")});

													//getting editview 
													viewObj.$el.html(viewObj.template({edit:editRow}));

										});


					},

					//save edited data.
					saveFunction: function(){

								var name = $("#editName").val();
								var age = $("#editAge").val();

								var editData = {
											id: editId,
											name : $("#editName").val(),
											age : $("#editAge").val()
								};

								var list = new List();

								//sending PUT request to the server.
								list.save(editData, {

											error: function(){
														console.log("error during edit data....");
											},
										
											success: function(){
												var app = nameSpace.app;
												app.navigate('show',{trigger:true})
											}
								});
					}	,

					//save edited data.
					cancelFunction: function(){
							var app = nameSpace.app;
							app.navigate('show',{trigger:true});
					}	

			});

			return editView;
});
