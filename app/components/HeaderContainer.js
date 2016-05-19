const React = require('react');

const HeaderContainer = props => {
	return (
		<div className='header-container container'>
			<div className='svg'>SVG HEADER</div>

			<div id='header-btn-container'>
				<div className='btn header-btn'>
					About
				</div>
				<div className='btn header-btn'>
					Gallery
				</div>
				<div className='btn header-btn'>
					Contact
				</div>
			</div>
		</div>
	)
}

module.exports = HeaderContainer;