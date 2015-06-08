var React       = require('react');
var PriceFilter = require('./PriceFilter');

module.exports = FilterBox = React.createClass({
	render: function() {
		return (
			<div className="filter-box">
				<h3><small>Stay on Target</small></h3>
				<PriceFilter minFilter={this.props.filters.setMin} maxFilter={this.props.filters.setMax}/>
			</div>
		)
	}
});