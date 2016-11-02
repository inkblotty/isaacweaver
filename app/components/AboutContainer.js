const React = require('react');

const AboutContainer = props => {
	return (
		<div className='about-container container smoothScroll' id='about'>
			<h2>About</h2>
			<div className='line'></div>
			<div className="details">
				<img className="isaac-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAY1BMVEX///8zMzMAAAAsLCwvLy8eHh4oKCgjIyP6+vr29vYXFxfh4eHQ0NCqqqpjY2PV1dXGxsazs7OMjIzo6Ojw8PAODg46OjppaWlHR0eFhYW9vb1RUVGhoaF2dnZWVlZMTEyWlpYRhhLRAAAEPUlEQVRoge2byWKjMAyGAW+AWcMOgeT9n3IgaTqZBhtbkZvL/Kfm0g/bktBiPA+uWspcyvqN/wBTmJfz1FLCOSe0neYyD38PfZo445T6d1G6/ppOv/MARRaLB/ivqGDZ6JydLwF5Qd9Fmilxyg7n4HXZTxsQdJE7eE65hr2JU2fLH3fO+/X8HZ1+yg7Zm+LUBXyMjeArvsSHF40h3PebAhseseMz/xbDtvzuyNqfxTNcuMW+3/Ye9eij3mLfV9EWc+/Ppvb+ELviwaOL3dLXxfd4r/3RLM78s3i8k89UrzW1yAULXtvDV6+TSPTSfuN9X2CF+9km0jxEsCKOb2vxNzEceB1A4H5QodATuyj7UIyTZoCMbjW7Mwr9CjG61eVOKPQB4u6r0c8o9BlI71DoHZCO4/BAOp1QCjsofcGAg+k4O/9ZqzvB/B3J4z4bbT4baaFvGZx6KvroG9YTMDoOHJLSriaPE2w8L4UsHsnoPC+HuJxAa+C0ALqP1jwEpNRoCfVavdvHG6ScclNtWb6vahFb14Ot1fMBD+4ltt2DGLNlGU6WnZMetWtV2i0euV8ZtlaLb5EnBYZN2rsYVpT9ls1LvkEfkpzNF4+/dM+7mL5nSY8P9wrTiCPQW9SbZjO8wMmkf6oy8jraIuVzP1WYpJeBk33fdDq2e4ZTQ+yqP7J7J/b+UNXq8cTVod+VazuH1M9dwg+83o2nP0tTzSNmkipphoLi6pxeqZ0efwr4olB98FhVq46uNrrG4fD9QVfHu9g9XarP/Rd2XtPBQuqVaFSpjx2rR6ZRpitn8Wr2XdWTNr9xGufllR+8YSkZ3PDrsSMGSbUQyxlrCvktee1jw4yaMt6VmOVEMgcGV23+ijT8iuX7Y9vYN+xEkCE4QJT2NrdNnjeAXcr3Qm9YQtlf/PQNfrE0cPYm2vQj0ACT7E32jR9PkOhfd8prfJb8JrMOACmHzUP2RMTVavtlBpuGqMRs7jyWiAu/i5hf/5lhoxC94sWodypb2CTkSIQb7H7h45j6q6g4vH808vd9XCl20MK0vEdnq0C7+twtXN9XkS63/a5YnXlpE1YcEeWNBKtOMFSqsBPZdcGBov5+1AFOum2lcDvry5Mw0f2mmovovqfd4bSmJYJM30u2NYU5Mn0v1flP/xT9s1YHvFoCoO/WNx/1d+/kJp/7KbE/vZC/RFdUNgZjl/elHNyEi/vsgi/KoqruXW8+1w5uZrdpZdPpy8nSd7d8QQ6vJFSDI74gs0kdLwchsKspKoQRe1NdLgHDewDCgj616t/V5cwD9nZ1QQlrWFcCWoehTIfJb2JBKOAhtu9UG9LP5xzeNIuqvByyqSUxY4KTw+eglBDOWMzbyzKnSYVx2yqsZDKmpzlb+tbfvgAWX2LrM31p+yrYb/sp64ZzWeSVmwlRWFcyT1YVRTHetP6x/sxlVVs3Bv8AX9lBUHxjFqYAAAAASUVORK5CYII=" />
				<p>Isaac Weaver grew up in the small coastal town of Half Moon Bay California with his parents, younger sister, and an ever-changing society of day-care children, pets, family friends, and relatives.  He has always loved to draw and suspects that the enduring freedom to create, no matter ones skill level, helps to keep a person young and healthy at heart.  His art work is inspired by the desire for truth and hope.  He lives in Littleton, Colorado where he enjoys learning, friends, family, and his life.</p>
			</div>
		</div>
	)
}

module.exports = AboutContainer;