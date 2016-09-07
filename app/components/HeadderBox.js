import React from 'react';
import LogoBlockHeader from './LogoBlockHeader';
import PhoneBlockHeader from './PhoneBlockHeader';

export default class HeadderBox extends React.Component{
	render(){
		return (
			<header>
				<div className="globalWrapper">
					<div className="innerWrapper">
						< LogoBlockHeader />
						< PhoneBlockHeader />
					</div>
				</div>
			</header>
		);
	}
}