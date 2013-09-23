/*
		Defining Backbone Router.
*/
define('Router',
				[
					'jquery',
					'underscore',
					'backbone',
					'HeaderView',
					'EditView',
					'AddView',
					'ContentView',
					'LoginView'
				],
				function($, _ , backbone, HeaderView, EditView, AddView, ContentView,  LoginView){
					var appRouter = {};

					//creating Backbone Router
					appRouter = Backbone.Router.extend({

							initialize: function() {				
								//Insert the header/navbar
								this.headerView = new HeaderView();
								$("#header").html(this.headerView.render().el);
							}	,

							routes:{
								'':'header',
								'show':'showList',
								'edit/:id':'editRecord',
								'delete/:id':'deleteRecord',
								'add':'addRecord'
							},

							header: function(){
										this.loginView = new LoginView();
										$("#page-content").html(this.loginView.render());
							},

							//edit record
							editRecord: function(id){

									//getting editview 
									this.editVeiw = new EditView();
									$("#page-content").html(this.editVeiw.render(id));

							},

							//new record.
							addRecord: function(){

									this.addVeiw = new AddView();
									$("#page-content").html(this.addVeiw.render());

							},

							showList: function(){
											this.contentView = new ContentView();
											$("#page-content").html(this.contentView.render());
							}
		
					});		//Router close.
				
				return appRouter;
});
