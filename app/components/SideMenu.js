const React = require('react');

const SideMenu = React.createClass({
	render: function() {
		return (
			<div className='menu'>
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

module.exports = SideMenu;