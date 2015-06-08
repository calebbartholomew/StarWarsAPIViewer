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
		if(typeof shipsURL === 'undefined' || shipsURL === null)
			return;

		$.ajax({
			url: shipsURL,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({ships: this.state.ships.concat(data.results)}, function(){

					this.filterShips(function(){
						if(typeof data.next !== 'undefined') {
							this.loadShips(data.next);
						}
					});

				}.bind(this));
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(shipsURL, status, err);
			}.bind(this)
		});
	},
	filterShips: function(cb) {
		var filteredShips = this.state.ships;

		//
		// First sort our items by the current criteria.
		//
		switch(this.state.sort.by) {
			case 'name':
				filteredShips.sort(function(a,b){
					if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
					if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
					return 0;
				});

				if(this.state.sort.dir === 'dsc'){
					filteredShips.reverse();
				}
			break;

			case 'cost':
				filteredShips.sort(function(a,b){
					if(isNaN(a.cost_in_credits)) {
						if(isNaN(b.cost_in_credits)){
							return 0;
						}

						return 1;
					}

					if(isNaN(b.cost_in_credits)){
						return -1;
					}

					if(Number(a.cost_in_credits) > Number(b.cost_in_credits)) return 1;
					if(Number(a.cost_in_credits) < Number(b.cost_in_credits)) return -1;
					return 0;
				});

				if(this.state.sort.dir === 'dsc') {
					filteredShips.reverse();
				}
			break;

			default:
			break;
		}

		//
		// Now filter out items that don't match our bounds.
		//
		if(this.state.filters.min){
			filteredShips = filteredShips.filter(function(ship){
				
				// If we don't know the price, show it anyway.
				if(isNaN(ship.cost_in_credits)) {
					return true;
				}

				if(Number(ship.cost_in_credits) >= this.state.filters.min){
					return true;
				}

				return false;
			}.bind(this));
		}

		if(this.state.filters.max){
			filteredShips = filteredShips.filter(function(ship){
				
				// If we don't know the price, show it anyway.
				if(isNaN(ship.cost_in_credits)) {
					return true;
				}

				if(Number(ship.cost_in_credits) <= this.state.filters.max){
					return true;
				}

				return false;
			}.bind(this));
		}

		if(this.state.filters.searchTerm){
			filteredShips = filteredShips.filter(function(ship){
				var searchString = ' ';

				//
				// Scrunch everything into one string so we only need to search
				// one string.
				//
				for(var prop in ship) {
					if(Array.isArray(ship[prop])) {
						searchString += ship[prop].join(' ');
					} else {
						searchString += ' '+ ship[prop];
					}
				}

				if( RegExp(this.state.filters.searchTerm,'ig').test( searchString )){
					return true;
				}

			}.bind(this));
		}

		this.setState({filteredShips: filteredShips}, cb);
	},
	sortNameAsc: function(){
		this.setState({sort: {by: 'name', dir: 'asc'}}, function(){
			this.filterShips();
		});
	},
	sortNameDsc: function(){
		this.setState({sort: {by: 'name', dir: 'dsc'}}, function(){
			this.filterShips();
		});
	},
	sortCostAsc: function(){
		this.setState({sort: {by: 'cost', dir: 'asc'}}, function(){
			this.filterShips();
		});
	},
	sortCostDsc: function(){
		this.setState({sort: {by: 'cost', dir: 'dsc'}}, function(){
			this.filterShips();
		});
	},
	searchShips: function(searchTerm) {
		this.setState({filters: {searchTerm: searchTerm}}, function(){
			this.filterShips();
		});
	},
	setMin: function(enabled, value) {
		var min = enabled === true ? value : null;

		this.setState({filters: {min: min}}, function(){
			this.filterShips();
		});
	},
	setMax: function(enabled, value) {
		var max = enabled === true ? value : null;

		this.setState({filters: {max: max}}, function(){
			this.filterShips();
		});
	},
	getInitialState: function() {
		return {
			ships:[], 
			filteredShips:[], 
			filters: {},
			sort: {by:'', dir: ''}
		};
	},
	componentDidMount: function() {
		// Initial load of ships.  This will recurse all
		// entries in the SWAPI database.
		this.loadShips('http://swapi.co/api/starships/');
	},

	//
	// Render function
	//
	render: function() {
		var sorters = {
			name: {
				asc: this.sortNameAsc,
				dsc: this.sortNameDsc
			}, 
			cost: {
				asc: this.sortCostAsc,
				dsc: this.sortCostDsc
			}
		};

		var filters = {
			setMin: this.setMin,
			setMax: this.setMax
		};

		return (
			<div className="ships-app row">
				<SiteHeader searchShips={this.searchShips}/>
				<ShipsBox ships={this.state.filteredShips} sorters={sorters} filters={filters}/>
			</div>
		)
	}
});