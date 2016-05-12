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
			<div className='main-content-container container'>
				<HeaderContainer />
				<AboutContainer />
				<ImageContainer />
				<ContactContainer />
			</div>
		</div>
	)
}

module.exports = App;