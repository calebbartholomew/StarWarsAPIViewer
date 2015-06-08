var React = require('react');
var FilterBox = require('./FilterBox');

module.exports = SideBar = React.createClass({
	render: function() {
		return (
			<div className="side-bar col-xs-4 col-md-2">
				<FilterBox filters={this.props.filters} />
			</div>
		)
	}
});