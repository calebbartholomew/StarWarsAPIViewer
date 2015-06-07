var React    = require('react');
var ShipsApp = require(__dirname + '/../bin/jsx/components/ShipsApp');

module.exports = exports = function(app) {
	var scripts = [];

	//
	// Load our scripts for our environment
	//
	if(app.get('env') === 'development') {
		scripts.push({type: 'text/javascript', url: '/react.js'});
		scripts.push({type: 'text/javascript', url: '/client.js'});
	} else {
		scripts.push({type: 'text/javascript', url: '/react.min.js'});
		scripts.push({type: 'text/javascript', url: '/client.min.js'});
	}

	//
	// Setup routes
	//
	app.get('/', function(req, res) {

		var markup = React.renderToString(React.createElement(ShipsApp,{}));

		res.render('index', {
			scripts: scripts,
			markup: markup
		});
	});
}
