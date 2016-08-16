const React = require('react');
const Link = require('react-router').Link;

const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

/*
	<span className='fa fa-picture-o' />
	<span className='fa fa-th' />
*/

const ImgMenu = props => {
	return (
		<div>
			<div className='image-menu'>
				<Link to='/' className='btn img-menu-btn'>
					<span>thumbs</span>
				</Link>
				<Link to='/carousel/0' className='btn img-menu-btn'>
					<span>carousel</span>
				</Link>
			</div>
			<ReactCSSTransitionGroup
				transitionName="appear"
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}>
				{React.cloneElement(props.children, {key:props.location.pathname})}
			</ReactCSSTransitionGroup>
		</div>
	)
}

module.exports = ImgMenu;