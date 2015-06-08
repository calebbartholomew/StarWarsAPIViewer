var React        = require('react');
var SideBar      = require('./SideBar');
var ShipsList    = require('./ShipsList');
var ShipDetails  = require('./ShipDetails');
var PilotDetails = require('./PilotDetails');

module.exports = ShipsBox = React.createClass({
	shipDetails: function(ship) {
		this.setState({ship: ship}, function() {
			this.state.films = [];
			this.state.pilots = [];
			this.loadFilms(ship.films);
			this.loadPilots(ship.pilots);
			$('#ship-details').addClass('opened');
		});
	},
	pilotDetails: function(pilot) {
		this.setState({pilot: pilot}, function() {
			$('#pilot-details').addClass('opened');
		});
	},
	loadFilms: function(filmList) {
		filmList.forEach(function(filmURL){
			$.ajax({
				url: filmURL,
				dataType: 'json',
				cache: false,
				success: function(data) {
					this.state.films.push(data.title);

					this.setState({films: this.state.films});
				}.bind(this),
				error: function(xhr, status, err) {
					console.error(shipsURL, status, err);
				}.bind(this)
			});
		}.bind(this));
	},
	loadPilots: function(pilotList) {
		pilotList.forEach(function(pilotURL){
			$.ajax({
				url: pilotURL,
				dataType: 'json',
				cache: false,
				success: function(data) {
					this.state.pilots.push(data);

					this.setState({pilots: this.state.pilots});
				}.bind(this),
				error: function(xhr, status, err) {
					console.error(shipsURL, status, err);
				}.bind(this)
			});
		}.bind(this));
	},
	getInitialState: function() {
		return {
			ship: null,
			films: [],
			pilots: [],
			pilot: null
		}
	},
	render: function() {
		return (
			<div className="ships-box col-md-12">
				<SideBar filters={this.props.filters}/>
				<ShipsList ships={this.props.ships} sorters={this.props.sorters} shipDetails={this.shipDetails}/>
				<ShipDetails ship={this.state.ship} films={this.state.films} pilots={this.state.pilots} pilotDetails={this.pilotDetails}/>
				<PilotDetails pilot={this.state.pilot} />
			</div>
		)
	}
});