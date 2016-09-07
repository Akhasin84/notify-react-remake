import React from 'react';
import ReactDOM from 'react-dom';
import AboveLine from './AboveLine';
import HeadderBox from './HeadderBox';
import MainBox from './MainBox';
import Footer from './Footer';

class GlobalComponent extends React.Component{
	render(){
		return(
			<div className="WholePage">
				< AboveLine />
				< HeadderBox />
				< MainBox />
				< Footer />
			</div>
		);
	}
}

ReactDOM.render(<GlobalComponent/>, document.getElementById('app'));