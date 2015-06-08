var React = require('react');

module.exports = PriceFilter = React.createClass({
	render: function() {
		return (
			<div className="price-filter">
				<h5>Min</h5>
				<div className="input-group">
					<span className="input-group-addon">
						<input type="checkbox" /> 
					</span>
					<input type="number" className="form-control" min="0" value="0"/>
				</div>
				<h5>Max</h5>
				<div className="input-group">
					<span className="input-group-addon">
						<input type="checkbox" /> 
					</span>
					<input type="number" className="form-control" min="0" value="0"/>
				</div>
			</div>
		)
	}
});