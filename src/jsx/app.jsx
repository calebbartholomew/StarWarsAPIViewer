var ShipsApp = require('./components/ShipsApp');

document.addEventListener('DOMContentLoaded',function(){
	React.render(
		<ShipsApp />, 
		document.getElementById('ships-app')
	);
});