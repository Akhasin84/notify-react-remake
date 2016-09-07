import React from 'react';
import MainFeaturesBox from './MainFeaturesBox';
import MainVideoAndFormBox from './MainVideoAndFormBox';
import MainSliderAndSoc from './MainSliderAndSoc';

export default class MainBox extends React.Component{
	render(){
		return (
			<main>
				< MainFeaturesBox />
				< MainVideoAndFormBox />
				< MainSliderAndSoc />
			</main>
		);
	}
}