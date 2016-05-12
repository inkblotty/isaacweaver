const React = require('react');

const SideMenu = require('./SideMenu');
const HeaderContainer = require('./HeaderContainer');
const AboutContainer = require('./AboutContainer');
const ImageContainer = require('./ImageContainer');
const ContactContainer = require('./ContactContainer');

const App = props => {
	return (
		<div>
			<SideMenu />
			<HeaderContainer />
			<AboutContainer />
			<ContactContainer />
		</div>
	)
}

module.exports = App;