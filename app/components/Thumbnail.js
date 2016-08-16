const React = require('react');
const Link = require('react-router').Link;

const Thumbnail = React.createClass({
	getInitialState: function() {
		return {
			spinClass: 'fa fa-spin fa-spinner',
			errorClass: 'hidden',
			error: '',
			imgClass: 'hidden'
		}
	},
	handleImageLoaded: function() {
		this.setState({
			spinClass: 'hidden',
			errorClass: '',
			imgClass: ''
		})
	},
	handleImageError: function() {
		this.setState({
			spinClass: 'hidden',
			errorClass: '',
			error: 'image unavailable'
		})
	},
	render: function() {
		let pathname = `/carousel/${this.props.imgIndex}`;
		let showClass = this.props.showClass ? `thumb-wrapper thumb-${this.props.showClass}` : 'thumb-wrapper';

		if (!this.props.fromCarousel) {
			return (
				<div className="thumb-wrapper">
					<Link to={pathname} >
						<i className={this.state.spinClass}></i>
						<span className={this.state.errorClass}>{this.state.error}</span>
						<img
							src={this.props.imgSrc}
							onLoad={this.handleImageLoaded}
							onError={this.handleImageError}
							className={`thumb-img ${this.state.imgClass}`} />
					</Link>
				</div>
			)
		}
		else {
			return (
				<div className={showClass} onClick={this.props.onClick}>
					<i className={this.state.spinClass}></i>
					<span className={this.state.errorClass}>{this.state.error}</span>
					<img
						src={this.props.imgSrc}
						onLoad={this.handleImageLoaded}
						onError={this.handleImageError}
						className={`thumb-img ${this.state.imgClass} ${this.props.imgIndex}`} />
				</div>
			)	
		}
	}
});

module.exports = Thumbnail;