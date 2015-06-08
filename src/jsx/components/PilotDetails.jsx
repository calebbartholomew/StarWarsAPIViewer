var React    = require('react');

module.exports = PilotDetails = React.createClass({
	collapse: function(){
		$('#pilot-details').toggleClass('opened');
	},
	render: function() {
		var content = null;

		if(this.props.pilot) {
			var pilot = this.props.pilot;

			content = ([
				<h1>{pilot.name}</h1>,
				<h3>Birth Year: {pilot.birth_year}</h3>,
				<h4>Gender: {pilot.gender}</h4>,
				<h4>Height: {pilot.height} cm</h4>,
				<h4>Mass: {pilot.mass} kg</h4>,
				<h4>Eye Color: {pilot.eye_color}</h4>,
				<h4>Hair Color: {pilot.hair_color}</h4>,
				<h4>Skin color: {pilot.skin_color}</h4>
			])
		}

		return (
			<div id="pilot-details" className="pilot-details">
				<button type="button" className="close-button btn btn-default" onClick={this.collapse}><span className="glyphicon glyphicon-remove" /></button>
				<div className="content">
					{content}
				</div>
			</div>
		)
	}
});