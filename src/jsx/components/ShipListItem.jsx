var React    = require('react');

module.exports = ShipListItem = React.createClass({
	render: function() {
		return (
			<tr className="ship-list-item">
				<td className="col-md-6">{this.props.ship.name}</td>
				<td className="col-md-6">{this.props.ship.cost_in_credits}</td>
			</tr>
		)
	}
});