import React from 'react';
import {
	Link,
} from 'react-router-dom';


class PageHeader extends React.Component {
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

export default PageHeader;