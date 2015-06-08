var React    = require('react');

module.exports = ShipListItem = React.createClass({
	shipDetails: function() {
		this.props.shipDetails(this.props.ship);
	},
	render: function() {

		var cost = [];

		if(!isNaN(this.props.ship.cost_in_credits)) {
			cost.push(
				<img className="currency-symbol" src="/images/currency_symbol.png" />
			)
		}

		cost.push(<span className="list-price">{this.props.ship.cost_in_credits}</span>);

		return (
			<tr className="ship-list-item" onClick={this.shipDetails}>
				<td className="col-md-6">{this.props.ship.name}</td>
				<td className="col-md-6">{cost}</td>
			</tr>
		)
	}
});