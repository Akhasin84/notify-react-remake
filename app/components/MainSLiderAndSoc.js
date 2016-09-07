import React from 'react';
import Slider from './Slider';

export default class MainSliderAndSoc extends React.Component{
	render(){
		return (
			<div className="sliderAndSocials">
				<div className="globalWrapper">
					< Slider />
					<h3>Say Hi & Get in Touch</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse. </p>
					<div className="socials">
						<a href="#" className="socialLink">
							<img src="images/tweeter.png" alt="soc"/>
						</a>
						<a href="#" className="socialLink">
							<img src="images/facebook.png" alt="soc" />
						</a>
						<a href="#" className="socialLink">
							<img src="images/gogleplus.png" alt="soc" />
						</a>
						<a href="#" className="socialLink">
							<img src="images/pinterest.png" alt="soc" />
						</a> 
						<a href="#" className="socialLink">
							<img src="images/linkedin.png" alt="soc" />
						</a>
						<a href="#" className="socialLink">
							<img src="images/tube.png" alt="soc" />
						</a>
					</div>
				</div>
			</div>
		);
	}
}