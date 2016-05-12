const React = require('react');
const Link = require('react-router').Link;

const Thumbnail = props => {
	let pathname = `/carousel/${props.imgIndex}`;
	let showClass = props.showClass ? `thumb-wrapper thumb-${props.showClass}` : 'thumb-wrapper';

	if (!props.fromCarousel) {
		return (
			<div className="thumb-wrapper">
				<Link to={pathname} >
				<img src={props.imgSrc} className="thumb-img" />
				</Link>
			</div>
		)
	}
	else {
		return (
			<div className={showClass} onClick={props.onClick}>
				<img src={props.imgSrc} className={`thumb-img ${props.imgIndex}`} />
			</div>
		)
	}
}

module.exports = Thumbnail;