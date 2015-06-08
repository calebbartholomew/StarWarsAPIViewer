var React = require('react');

module.exports = SiteHeader = React.createClass({
	render: function() {
		return (
			<nav className="site-header navbar navbar-default" role="search">
				<span className="logo">SHIPS R US</span>
				<div className="form-group">
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Force Search..." />
						<span className="input-group-btn">
							<button className="btn btn-primary" type="button">Use the Force!</button>
						</span>
					</div>
				</div>
			</nav>
		)
	}
});