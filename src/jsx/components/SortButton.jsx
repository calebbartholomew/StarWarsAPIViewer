var React    = require('react');

module.exports = SortButton = React.createClass({
	render: function() {
		return (
			<button type="button" className="sort-button btn btn-default">
				<span className="glyphicon glyphicon-sort-by-attributes"></span>
			</button>
		)
	}
});

