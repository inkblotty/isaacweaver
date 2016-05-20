const React = require('react');

const MainMenu = require('./MainMenu');
const HeaderContainer = require('./HeaderContainer');
const AboutContainer = require('./AboutContainer');
const ImageContainer = require('./ImageContainer');
const ContactContainer = require('./ContactContainer');

const App = React.createClass({
	getInitialState: function() {
		return {
			showMenu: false
		}
	},
	componentDidMount: function() {
		window.addEventListener('scroll', this.handleScroll);
	},
	handleScroll: function() {
		var top = window.scrollY;

		if ((top >= 401) && !this.state.showMenu) {
			document.getElementById('header-btn-container').classList.value = "hidden";
			document.getElementById('menu').classList.value = "";

			this.setState({
				showMenu: true
			})
		}
		else if ((top < 401) && this.state.showMenu) {
			document.getElementById('header-btn-container').classList.value = "";
			document.getElementById('menu').classList.value = "hidden";

			this.setState({
				showMenu: false
			})
		}
	},	
	componentWillUnmount: function() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	render: function() {
		return (
			<div onScroll={this.scroll}>
				<MainMenu />
				<div className='main-content-container container'>
					<HeaderContainer />
					<AboutContainer />
					<ImageContainer />
					<ContactContainer />
				</div>
			</div>
		)
	}
});

module.exports = App;