//render login template
define('LoginView',[
				"jquery",
				"underscore",
				"backbone",
				"Login",
				'ContentView',
				'text!./template/login.html',		
], function($, _ , backbone, Login, ContentView , tmpl){
				var loginView = {};
	
				//creating login view here.
				loginView = Backbone.View.extend({

							el:'#page-content',
							initialize: function(){
										this.template = _.template(tmpl);
										this.render();
							},

							//view button click.
							events: {
									"click #loginbutton" : "readLoginParameter"
							},

							render: function(){
									this.$el.html(this.template(tmpl));
							},

							readLoginParameter : function(){

										var that = this;												
										//read username and password.
										var username = $("#username").val();
										var password = $("#pass").val();	
	
										//creating an login object;
										var loginObject = {
													username: username,
													password:password
										};
																															
										//creating an object to login model.
										var login = new Login();
										login.save(loginObject, {

												error: function(){
												},

												success: function(model, response, options){
														if(response.success){
																		//loading landing page.
																that.contentView = new ContentView();
																$("#page-content").html(that.contentView.render());
														}
														else{
																$("#errorMsg").show();
														}
												}			
											
										});
										
							}

				});
			
				return loginView;			
});
