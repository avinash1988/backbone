/*
		declaring content view .
*/

define('ContentView',[
				"jquery",
				"underscore",
				"backbone",
				'text!./template/content.html',		
				"ListCollection"
], function($, _, backbone, tmpl, listCollection){
			var contentView = {};
			
			//creating conte view here.
			contentView = Backbone.View.extend({
							el:'#page-content',
							initialize: function(){
										this.template = _.template(tmpl);
							},

							render: function(){

										var listColl = new listCollection();
										var viewObj = this;
										listColl.fetch({

                           error: function () {
                             console.log("error!!"); 
                           },

                           success: function () {
                              //console.log("no error"); 
                           }
                        }).complete(function () {
														viewObj.$el.html(viewObj.template({records:listColl.models }));

                     });
							}
			});

			return contentView;

});
