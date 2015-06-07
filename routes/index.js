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

	app.get('/', function(req, res) {
		res.render('index', {
			scripts: scripts
		});
	});
}
