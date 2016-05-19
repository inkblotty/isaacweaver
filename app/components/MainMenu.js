const React = require('react');

const MainMenu = React.createClass({
	render: function() {
		return (
			<div id='menu' className='hidden'>
				<div className='btn menu-btn'>
					About
				</div>
				<div className='btn menu-btn'>
					Gallery
				</div>
				<div className='btn menu-btn'>
					Contact
				</div>
			</div>
		)
	}
})

module.exports = MainMenu;