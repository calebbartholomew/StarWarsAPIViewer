var React    = require('react');
var FilmList = require('./FilmList');
var FilmList = require('./PilotList');

module.exports = ShipDetails = React.createClass({
	collapse: function(){
		$('#ship-details').toggleClass('opened');
	},
	render: function() {
		var content = null;

		if(this.props.ship) {
			var ship = this.props.ship;

			content = ([
				<h1>{ship.name} <small><img className="currency-symbol" src="/images/currency_symbol.png" /> {ship.cost_in_credits}</small></h1>,
				<h3>Model: {ship.model}</h3>,
				<h4>Starship Class: {ship.starship_class}</h4>,
				<h4>Manufacturer: {ship.manufacturer}</h4>,
				<h4>Length: {ship.length} meters</h4>,
				<h4>Crew: {ship.crew}</h4>,
				<h4>Passengers: {ship.passengers}</h4>,
				<h4>Max Atmo. Rating: {ship.max_atmosphereing_speed}</h4>,
				<h4>Hyperdrive Rating: {ship.hyperdrive_rating}</h4>,
				<h4>MGLT: {ship.MGLT}</h4>,
				<h4>Cargo Capacity: {ship.cargo_capacity} kg</h4>,
				<h4>Consumables: {ship.consumables}</h4>,
				<FilmList films={this.props.films}/>,
				<PilotList pilotDetails={this.props.pilotDetails} pilots={this.props.pilots}/>
			])
		}

		return (
			<div id="ship-details" className="ship-details">
				<button type="button" className="close-button btn btn-default" onClick={this.collapse}><span className="glyphicon glyphicon-remove" /></button>
				<div className="content">
					{content}
				</div>
			</div>
		)
	}
});