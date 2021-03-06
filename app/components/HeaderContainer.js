const React = require('react');
const SunSVG =  require('svg-url?noquotes!../images/sunSmiley4.svg');
//const backup = require('../images/sunSmiley2.png');

const HeaderContainer = React.createClass({
	drawLine: function(pathVar, delay) {
		var length = pathVar.getTotalLength();
  
		pathVar.style.strokeDashrray = length + ' ' + length;
		pathVar.style.strokeDashoffset = length;
	  
		pathVar.style.transition = pathVar.style.WebkitTransition =
			'none';
	  
		pathVar.getBoundingClientRect();
		
		pathVar.style.transition =   pathVar.style.WebkitTransition = 'stroke-dashoffset 5s ease-in-out';
		
		if (delay) {
			pathVar.style['transition-delay'] = pathVar.style.WebkitTransition = delay;
		}
	  
		pathVar.style.strokeDashoffset = 0;
	},
	scrollTo: function(locId) {

	},
	drawSun: function() {
		return;
		/*
		var self = this;
		var elems = document.getElementsByTagName('path');
		var pathArray = Array.prototype.slice.call(elems,0);

		pathArray.forEach(function(path) {
    	var length = path.getTotalLength();
  
    	path.setAttribute('stroke-dasharray', length + ' ' + length);
    	path.setAttribute('stroke-dashoffset', length);
  
    	if (path.id === 'right-eye') {
	      	self.drawLine(path, '3s');
	      	setTimeout(function() {
	        	path.setAttribute('fill', '#1e2022')
	      	}, 3500);
    	}
    	else if (path.id !== 'path-squiggle') {
      		self.drawLine(path, '3s');
    	}
    	else {
	      	self.drawLine(path);
		    setTimeout(function() {
		    	path.setAttribute('fill', '#1e2022');
	      	}, 3200);
    	}
  		}) */
	},
	componentDidMount: function() {
		this.drawSun();
	},
	render: function() {
		// <SunSVG className='normal' /> should go inside 'squiggle' div

		return (
			<div className='header-container container'>
				<div className='name-header'>
					<div className="name">Isaac Weaver</div>
					<div className="line"></div>
					<div className="subheader">art & illustration</div>
				</div>

				<div id="squiggle">

				</div>

				<div id='header-btn-container'>
					<a href='#about' className='btn header-btn'>
						About
					</a>
					<a href='#gallery' className='btn header-btn'>
						Gallery
					</a>
					<a href='#contact' className='btn header-btn'>
						Contact
					</a>
				</div>
			</div>
		)
	}
});

module.exports = HeaderContainer;