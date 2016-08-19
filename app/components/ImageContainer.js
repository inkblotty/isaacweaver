const React = require('react');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const browserHistory = require('react-router').browserHistory;

const ImgMenu = require('./ImgMenu');
const Thumbs = require('./Thumbs');
const Carousel = require('./Carousel');

const ImageContainer = props => {
	return (
		<div className='image-container container smoothScroll' id='gallery'>
			<Router history={browserHistory}>
				<Route path="/" component={ImgMenu} >
					<IndexRoute component={Thumbs} />
					<Route path="carousel/:imgIndex" component={Carousel} />
				</Route>
			</Router>
		</div>
	)
}

module.exports = ImageContainer;