import React from 'react';

export default class MainVideoAndFormBox extends React.Component{
	render(){
		return (
			<div className="videoAndForm">
				<div className="globalWrapper">
					<div className="innerWrapper">
						<div className="subscribe">
							<h3>Get Notified Of Any Updates!</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla nisl congue congue. Maecenas nec condimentum libero, at elementum mauris. Phasellus eget nisi dapibus, ultricies nisl at, hendrerit risusuis ornare luctus id sollicitudin ante lobortis at.</p>
							<form action="#" method="post">
								<input type="mail" placeholder="Email Address" name="mail"/><button>Notify</button>
							</form>
						</div>
						<div className="video">
							<iframe src="https://player.vimeo.com/video/170075527" width="500" height="307" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
						</div>
					</div>
				</div>
			</div>
		);
	}
}