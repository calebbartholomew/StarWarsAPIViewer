#!/usr/bin/env node
/** @file app.js
  Application root for starship sales site.

  @author Caleb Bartholomew
  @date June 5, 2015
  @copyright 2015 Caleb Bartholomew
*/

var express = require('express');
var app     = express();
var colors  = require('colors');

//
// Configure Express
//
app.set('port', process.env.PORT     || 3000);
app.set('env',  process.env.NODE_ENV || 'development')


//
// Start listening for connections
//
app.listen(app.get('port'), function() {
	/**
	  Creates a simple star filed :)
	 */
	function CreateStarField(rows, columns, chance) {
		var stars = ['˙','¨','᛫','．','.','・','˙','¨','᛫','⁖','．','・','・','˙','¨','᛫','．','・','•','・','・','・','・',];

		for(var n = 0; n < rows; ++n) {
			for(var i = 0; i < columns; ++i) {
				if(Math.random() * 100 > chance) {
					var s = Math.floor(Math.random() * stars.length);
					process.stdout.write(stars[s]);
				} else {
					process.stdout.write(' ');
				}
			}
			console.log('');
		}
	}

	/**
	  Logs a string at a relative y value, and an absolute x value.
	 */
	function logStringAt(string, x, y) {
		process.stdout.moveCursor(0, y);
		process.stdout.cursorTo(x);
		process.stdout.write(string);
	}

	CreateStarField(11, 50, 85);

	logStringAt('╒══════════════════════════════════╕', 8, -9);
	logStringAt('│       Star Wars API Viewer       │', 8, 1);
	logStringAt('└──────────────────────────────────┘', 8, 1);
	logStringAt('  Server listening for connections    ', 8, 2);
	logStringAt('    Port:        ' + app.get('port').toString().cyan.bold, 8, 1);
	logStringAt('    Environment: ' + app.get('env').toString().cyan.bold, 8, 1);

	logStringAt('\n', 0, 4);

});