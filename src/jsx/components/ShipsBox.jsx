var React    = require('react');
var SideBar  = require('./SideBar');

module.exports = ShipsBox = React.createClass({
	render: function() {
		return (
			<div className="ships-box col-md-12">
				<SideBar />
				Ships Box
			</div>
		)
	}
});