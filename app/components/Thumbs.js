const React = require('react');
const ImgObjs = require('../imageObjs');
const Thumbnail = require('./Thumbnail');

const Thumbs = props => {
	let ThumbItems = ImgObjs.map((item, index) => {
		let key=`thumb${index}`;
		return (
			<li key={key}>
				<Thumbnail imgSrc={item.thumb} imgIndex={index} />
			</li>
		)
	});

	return (
		<ul className="thumb-container">
			{ThumbItems}
		</ul>
	)
}

module.exports = Thumbs;