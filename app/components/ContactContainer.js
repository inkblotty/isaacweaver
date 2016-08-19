const React = require('react');

const ContactContainer = props => {
	return (
		<div className='contact-container container smoothScroll' id='contact'>
			<h2>Contact</h2>
			<div className='line'></div>
			<div className='details contact-details'>
				<div className='phone'>222-2222</div>
				<div className='email'>example@example.com</div>
			</div>
		</div>
	)
}

module.exports = ContactContainer;