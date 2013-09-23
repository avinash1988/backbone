//load all js file using require.js
requirejs.config({

  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  },

		//link all js file for application.
		paths:{

			"jquery":"/lib/jquery-1.7.2",
			"underscore":"/lib/underscore",
			"backbone":"/lib/backbone",
	    "text": "/lib/text",
			"App":"app",

			//load view
			"HeaderView":"./view/headerview",
			"ContentView":"./view/contentview",
			"EditView":"./view/editview",
			"AddView":"./view/addview",
			"LoginView":"./view/loginview",

			//load model
			"List": "./model/list",
			"Login": "./model/login",

			//load Collection.
			"ListCollection" : "./collection/listCollection",

			//load Router
			"Router":"router"
		}
});

//call app.js to start Route
require(['App'], function(App, client) {
  App.initialize();
});

