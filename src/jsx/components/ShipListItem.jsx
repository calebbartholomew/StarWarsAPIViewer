var React    = require('react');

module.exports = ShipListItem = React.createClass({
	render: function() {

		var cost = [];

		if(!isNaN(this.props.ship.cost_in_credits)) {
			cost.push(
				<img className="currency-symbol" src="/images/currency_symbol.png" />
			)
		}

		cost.push(this.props.ship.cost_in_credits);

		return (
			<tr className="ship-list-item">
				<td className="col-md-6">{this.props.ship.name}</td>
				<td className="col-md-6">{cost}</td>
			</tr>
		)
	}
});