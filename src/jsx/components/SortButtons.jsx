var React    = require('react');

module.exports = SortButtons = React.createClass({
	render: function() {
		return (
			<span className="sort-buttons">
				<button type="button" className="sort-button btn btn-default" onClick={this.props.sort.dsc}>
					<span className="glyphicon glyphicon-sort-by-attributes"></span>
				</button>

				<button type="button" className="sort-button btn btn-default" onClick={this.props.sort.asc}>
					<span className="glyphicon glyphicon-sort-by-attributes-alt"></span>
				</button>
			</span>
		)
	}
});

