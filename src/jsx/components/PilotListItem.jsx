var React    = require('react');

module.exports = PilotListItem = React.createClass({
	pilotDetails: function(){
		this.props.pilotDetails(this.props.pilot);
	},
	render: function() {

		return (
			<span onClick={this.pilotDetails} className="pilot-tag label label-primary">{this.props.pilot.name}</span>
		)
	}
});