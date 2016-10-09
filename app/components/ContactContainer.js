const React = require('react');

const ContactContainer = props => {
	return (
		<div className='contact-container container smoothScroll' id='contact'>
			<h2>Contact</h2>
			<div className='line'></div>
			<div className='details contact-details'>
				<div className='has-icon phone'>(512) 554-2475</div>
				<div className='has-icon email'>isaacweaver@live.com</div>
			</div>
		</div>
	)
}

module.exports = ContactContainer;