var React    = require('react');

module.exports = ShipListItem = React.createClass({
	render: function() {
		return (
			<tr className="ship-list-item">
				<td>I&#39;m a ship!</td>
				<td>15k Credits</td>
			</tr>
		)
	}
});