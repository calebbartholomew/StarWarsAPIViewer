#!/usr/bin/env node
/** @file app.js
  Application root for starship sales site.

  @author Caleb Bartholomew
  @date June 5, 2015
  @copyright 2015 Caleb Bartholomew
*/

var express = require('express');
var app     = express();

//
// Configure Express
//
app.set('port', process.env.PORT || 3000);


//
// Start listening for connections
//
app.listen(app.get('port'), function() {
	console.log('Server listen on port: ' + app.get('port'));
});