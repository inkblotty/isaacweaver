const React = require('react');

const MainMenu = React.createClass({
	render: function() {
		return (
			<div id='menu' className='hidden'>
				<a href='#about'>
					<div className='btn menu-btn'>
						About
					</div>
				</a>
				<a href='#gallery'>
					<div className='btn menu-btn'>
						Gallery
					</div>
				</a>
				<a href='#contact'>
					<div className='btn menu-btn'>
						Contact
					</div>
				</a>
			</div>
		)
	}
})

module.exports = MainMenu;