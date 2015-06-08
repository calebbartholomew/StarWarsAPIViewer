var React      = require('react');
var SiteHeader = require('./SiteHeader');
var ShipsBox   = require('./ShipsBox');

module.exports = ShipsApp = React.createClass({
	render: function() {
		return (
			<div className="ships-app row">
				<SiteHeader />
				<ShipsBox />
			</div>
		)
	}
});