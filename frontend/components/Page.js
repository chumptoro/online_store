import React, { Component } from 'react'; 
//so we can abbreviate React.Component to just Component
// in the class declaration of the Page component below

import Header from '../components/Header';
import Meta from '../components/Meta';

class Page extends Component {
	render() {
		return (
			<div>
				<Meta/>
				<Header/>
				{this.props.children}
			</div>
		);
	}
}

export default Page;