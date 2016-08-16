const React = require('react');
const ImgObjs = require('../imageObjs');
const Thumbnail = require('./Thumbnail');

const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

function isInRange(index, range) {
	if (index >= range[0] && (index <= range[1])) {
		return true;
	} else { return false; }
}

const SliderImages = React.createClass({
	render: function() {
		let ThumbItems = ImgObjs.map((item, index) => {
			let key=`slider-thumb${index}`;
			let url=item.thumb;

			if (isInRange(index, this.props.activeRange)) {
				return (
					<li key={key}>
						<Thumbnail
							onClick={this.props.goToIndex}
							imgSrc={url}
							fromCarousel='true'
							imgIndex={index} 
							showClass='active' />
					</li>
				)
			}
			else {
				return (
					<li key={key}>
					<Thumbnail
						onClick={this.props.goToIndex}
						imgSrc={url}
						fromCarousel='true'
						imgIndex={index} />
					</li>
				)
			}

		})

		return (
			<ReactCSSTransitionGroup
					transitionName={this.props.slideClass}
					transitionEnterTimeout={1000}
					transitionLeaveTimeout={1000}>
				<ul className={this.props.containerClass}>
					{ThumbItems}
				</ul>
			</ReactCSSTransitionGroup>
		)
	}
});

module.exports = SliderImages;