/*
		List backbone collections.
*/


define('ListCollection', [
			'jquery',
			'underscore',
			'backbone',
			'List'
], function($, _, backbone, list){
				var listCollection = {};
				
				//creating collection of backbone.
				listCollection = Backbone.Collection.extend({
							model:list,
							url:'list',
							initialize: function(){
									console.log('list collection is initialize ......');
							}
				});
				return listCollection;
});
