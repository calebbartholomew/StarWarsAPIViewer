var React = require('react');

module.exports = PriceFilter = React.createClass({
	setMin: function() {
		var enabled = $('#min-checkbox').is(':checked');
		var min     = $('#min-input').val();
		this.props.minFilter(enabled, min);
	},
	setMax: function() {
		var enabled = $('#max-checkbox').is(':checked');
		var max     = $('#max-input').val();
		console.log(max,enabled);
		this.props.maxFilter(enabled, max);
	},
	render: function() {
		return (
			<div className="price-filter">
				<h5>Min</h5>
				<div className="input-group">
					<span className="input-group-addon">
						<input id="min-checkbox" type="checkbox" onChange={this.setMin} /> 
					</span>
					<input id="min-input" type="number" className="form-control" onInput={this.setMin} onChange={this.setMin} onKeyUp={this.setMin}/>
				</div>
				<h5>Max</h5>
				<div className="input-group">
					<span className="input-group-addon">
						<input id="max-checkbox" type="checkbox" onChange={this.setMax} /> 
					</span>
					<input id="max-input" type="number" className="form-control" onInput={this.setMax} onChange={this.setMax} onKeyUp={this.SetMax}/>
				</div>
			</div>
		)
	}
});