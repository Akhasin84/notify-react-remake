import React from 'react';

export default class LogoBlockHeader extends React.Component{
	render(){
		return (
			<div className="logoBlock">
				<a href="#" className="logo">Notify<span>.</span></a>
				<p>A great new free psd theme to showcase your new application. </p>
				<a href="#" className="systems">
					<img src="images/icon.png" alt="iOS"/>
				</a>
				<a href="#" className="systems">
					<img src="images/droid.png" alt="Android"/>
				</a>
				<a href="#" className="systems">
					<img src="images/win.png" alt="Windows"/>
				</a>
			</div>
		);
	}
}