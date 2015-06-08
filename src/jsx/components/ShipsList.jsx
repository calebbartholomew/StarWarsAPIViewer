var React        = require('react');
var ShipListItem = require('./ShipListItem');
var SortButton   = require('./SortButton');

module.exports = ShipsList = React.createClass({
	render: function() {
		return (
			<div className="ships-list col-xs-8 col-md-10">
				<table className="table table-hover">
					<thead>
						<tr>
							<th>
								Name 
								<SortButton />
							</th>
							<th>
								Price
								<SortButton />
							</th>
						</tr>
					</thead>
					<ShipListItem />
				</table>
			</div>
		)
	}
});