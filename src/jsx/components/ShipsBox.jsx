var React     = require('react');
var SideBar   = require('./SideBar');
var ShipsList = require('./ShipsList');

module.exports = ShipsBox = React.createClass({
	render: function() {
		return (
			<div className="ships-box col-md-12">
				<SideBar />
				<ShipsList ships={this.props.ships} name={this.props.name} cost={this.props.cost}/>
			</div>
		)
	}
});