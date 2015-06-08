var React = require('react');

module.exports = SiteHeader = React.createClass({
	searchTerm: function(){
		var term = $('#search-box').val();
		if(term === '')
			term = null;

		this.props.searchShips(term);
	},
	keyUp: function(e){
		console.log(e);
		if(e.keyCode === 13)
			this.searchTerm();
	},
	render: function() {
		return (
			<nav className="site-header navbar navbar-default" role="search">
				<span className="logo">S<img src="/images/ship.png" />IPS R US</span>
				<div className="form-group">
					<div className="input-group">
						<input id="search-box" type="text" className="form-control" placeholder="Force Search..." onKeyUp={this.keyUp}/>
						<span className="input-group-btn">
							<button className="btn btn-primary" type="button" onClick={this.searchTerm}>Use the Force!</button>
						</span>
					</div>
				</div>
			</nav>
		)
	}
});