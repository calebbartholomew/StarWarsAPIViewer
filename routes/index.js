var React    = require('react');
var ShipsApp = require(__dirname + '/../bin/js/components/ShipsApp');

module.exports = exports = function(app) {
	var scripts = [];
	var styles = [];

	//
	// Load our resources for our environment
	//
	var jsEnding  = app.get('env') === 'development'? '.js' : '.min.js';
	var cssEnding = app.get('env') === 'development'? '.css' : '.min.css';

	// Scripts
	scripts.push({type: 'text/javascript', src: '/js/react' + jsEnding});
	scripts.push({type: 'text/javascript', src: '/js/client' + jsEnding});
	scripts.push({type: 'text/javascript', src: '//code.jquery.com/jquery-2.1.4' + jsEnding});

	// Styles
	styles.push({rel:'stylesheet', type:'text/css', href:'//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap' + cssEnding});
	styles.push({rel:'stylesheet', type:'text/css', href:'/css/style' + cssEnding});

	//
	// Setup routes
	//
	app.get('/', function(req, res) {

		//
		// Render the page server side first.  This helps with SEO and initial
		// page load.
		//
		var markup = React.renderToString(React.createElement(ShipsApp,{}));

		res.render('index', {
			scripts: scripts,
			styles: styles,
			markup: markup
		});
	});
}
