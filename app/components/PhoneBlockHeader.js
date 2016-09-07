import React from 'react';

export default class PhoneBlockHeader extends React.Component{
	render(){
		return (
			<div className="phoneBlock">
				<img src="images/hand.png" alt="hand"/>
				<img src="images/img.png" className="inPhone" alt="content Phone"/>
			</div>
		);
	}
}