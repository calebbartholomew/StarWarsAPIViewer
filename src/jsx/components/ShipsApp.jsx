var React      = require('react');
var SiteHeader = require('./SiteHeader');
var ShipsBox   = require('./ShipsBox');

module.exports = ShipsApp = React.createClass({
	/**
	  Recursively fetches ships from the SWAPI until
	  we are told that there are no more pages, OR we
	  get an error.

	  Updates state with merged list of ships.

	  @param  shipsURL  SWAPI URL of ships to get.
	 */
	loadShips: function(shipsURL) {
		$.ajax({
			url: shipsURL,
			dataType: 'json',
			cache: false,
			success: function(data) {

				this.setState({ships: this.state.ships.concat(data.results)});
				
				if(typeof data.next !== 'undefined') {
					this.loadShips(data.next);
				}
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(shipsURL, status, err);
			}.bind(this)
		});
	},
	getInitialState: function() {
		return {ships:[]};
	},
	componentDidMount: function() {
		// Initial load of ships.  This will recurse all
		// entries in the SWAPI database.
		this.loadShips('http://swapi.co/api/starships/');
	},
	render: function() {
		return (
			<div className="ships-app row">
				<SiteHeader />
				<ShipsBox ships={this.state.ships} />
			</div>
		)
	}
});