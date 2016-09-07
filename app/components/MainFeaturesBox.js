import React from 'react';

export default class MainFeaturesBox extends React.Component{
	render(){
		return (
			<div className="features">
				<div className="globalWrapper">	
					<div className="innerWrapper">
						<div className="feat">
							<div className="featIcon">
								<img src="images/bolt.png" alt="icon"/>
							</div>
							<h3>Editable Theme</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla.</p>
						</div>
						<div className="feat">
							<div className="featIcon">
								<img src="images/star.png" alt="icon"/>
							</div>
							<h3>Flat Design</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla.</p>
						</div>
						<div className="feat">
							<div className="featIcon">
								<img src="images/world.png" alt="icon"/>
							</div>
							<h3>Reach Your Audience</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla.</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}