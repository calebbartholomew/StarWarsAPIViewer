var React         = require('react');
var PilotListItem = require('./PilotListItem');

module.exports = PilotList = React.createClass({
	render: function() {

		var pilotNodes = this.props.pilots.map(function(pilot){
			return (
				<PilotListItem pilotDetails={this.props.pilotDetails} pilot={pilot} />
			)
		}.bind(this));

		return (
			<h4 className="pilot-list">
				Pilots: {pilotNodes}
			</h4>
		)
	}
});