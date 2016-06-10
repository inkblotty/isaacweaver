const React = require('react');
const ImgArray = require('../imagesArray');
const Thumbnail = require('./Thumbnail');

const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

function isInRange(index, range) {
	if (index >= range[0] && (index <= range[1])) {
		return true;
	} else { return false; }
}

const SliderImages = props => {
	let ThumbItems = ImgArray.map((item, index) => {
		let key=`slider-thumb${index}`;
		let url=`${item}`;

		if (isInRange(index,props.activeRange)) {
			return (
				<li key={key}>
					<Thumbnail
						onClick={props.goToIndex}
						imgSrc={url}
						fromCarousel='true'
						imgIndex={index} 
						showClass='active' />
				</li>
			)
		} else {
			return (
				<li key={key}>
					<Thumbnail
						onClick={props.goToIndex}
						imgSrc={url}
						fromCarousel='true'
						imgIndex={index} />
				</li>
			)
		}
	});

	return (
		<ReactCSSTransitionGroup
				transitionName={props.slideClass}
				transitionEnterTimeout={1000}
				transitionLeaveTimeout={1000}>
			<ul className={props.containerClass}>
				{ThumbItems}
			</ul>
		</ReactCSSTransitionGroup>
	)
};

module.exports = SliderImages;