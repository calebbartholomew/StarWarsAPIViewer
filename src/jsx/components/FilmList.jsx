var React    = require('react');

module.exports = FilmList = React.createClass({
	render: function() {

		var filmNodes = this.props.films.map(function(film){
			return (
				<span className="film-tag label label-default">{film}</span>
			)
		});

		return (
			<h4 className="film-list">
				Films: {filmNodes}
			</h4>
		)
	}
});