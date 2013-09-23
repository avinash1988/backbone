/*
		defining header views
*/
define('HeaderView',[
		'jquery',
		'underscore',
		'backbone',
		"List",
		'text!./template/header.html'		
], function($, _, backbone, list, tmpl){
		var headerView = {};

		//creating Header view using backbone.js
		headerView = Backbone.View.extend({

					initialize: function(){
							this.template = _.template(tmpl)
					},
		
					events: {
							"click a": "select"
					},

					render: function(){
							$(this.el).html(this.template());
							return this;
					},

					//click on top anchor
					select: function(item){
							console.log(item);
					}
		});

		return headerView;

});
