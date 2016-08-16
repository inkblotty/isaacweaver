const React = require('react');
const ReactDOM = require('react-dom');

// styles
require('./styles/main.scss');

// components
const App = require('./components/App.js');

ReactDOM.render(
	<App />,
	document.getElementById('app')
)