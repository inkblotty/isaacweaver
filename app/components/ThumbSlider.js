const React = require('react');
const Thumbnail = require('./Thumbnail');
const SliderImages = require('./SliderImages');
const Link = require('react-router').Link;
const ImgArray = require('../imagesArray');

const ThumbSlider = React.createClass({
	getInitialState: function() {
		return {
			activeRange: [0, 5],
			slideClass: 'slide',
			containerClass: 'slider-img-container'
		}
	},
	scrollRight: function() {
		if (this.state.activeRange[1] + 6 > ImgArray.length-1) {
			this.setState({
				activeRange: [ImgArray.length-6, ImgArray.length-1],
				containerClass: 'slider-img-container shifted'
			})
		}
		else {
			this.setState({
				activeRange: [this.state.activeRange[0]+6, this.state.activeRange[1]+6],
				containerClass: 'slider-img-container shifted'
			})
		}
	},
	scrollLeft: function() {
		if (this.state.activeRange[0] - 6 < 0) {
			this.setState({
				activeRange: [0, 5],
				containerClass: 'slider-img-container'
			})
		}
		else {
			this.setState({
				activeRange: [this.state.activeRange[0]-6, this.state.activeRange[1]-6],
				containerClass: 'slider-img-container'
			})
		}
	},
	render: function() {
		return (
			<div className='slider-container'>
				<div onClick={this.scrollLeft} className="little arrow right">
					<i className="fa fa-caret-left" />
				</div>

				<SliderImages goToIndex={this.props.goToIndex}
					slideClass={this.state.slideClass}
					containerClass={this.state.containerClass}
					activeRange={this.state.activeRange}
					active={this.props.currentImg} />

				<div onClick={this.scrollRight} className="little arrow right">
					<i className="fa fa-caret-right" />
				</div>
			</div>
		)
	}
})

module.exports = ThumbSlider;