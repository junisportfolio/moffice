import React from 'react';
import {
	Router,
	Link,
} from 'react-router-dom';


class Duble_content extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){
		return(

			<section className="content-header">
				<h1>
					{this.props.pageTitleName}
					<small>{this.props.pageTitleNameSmall}</small>
				</h1>
				<ol className="breadcrumb">
					<li><Link to="/"> Home</Link></li>
					<li className="active">{this.props.pageTitle}</li>
				</ol>
			</section>
		)
	}
}

export default Duble_content;