var React        = require('react');
var ShipListItem = require('./ShipListItem');
var SortButtons  = require('./SortButtons');

module.exports = ShipsList = React.createClass({
	render: function() {
		var shipNodes = this.props.ships.length <= 0 ? [] : this.props.ships.map(function(ship){
			return (
				<ShipListItem ship={ship} shipDetails={this.props.shipDetails} />
			)
		}.bind(this));

		return (
			<div className="ships-list col-xs-8 col-md-10">
				<div className="table-scroll">
					<table className="table table-fixed table-header">
						<thead>
							<tr>
								<th className="col-md-6">
									Name 
									<SortButtons sort={this.props.sorters.name}/>
								</th>
								<th className="col-md-6">
									Cost <small>(Galactic Credits)</small>
									<SortButtons sort={this.props.sorters.cost}/>
								</th>
							</tr>
						</thead>
					</table>

					<table className="table table-hover">
						<tbody>
							{shipNodes}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
});