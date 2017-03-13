import React from 'react';
import PageHeader from '../../components/PageHeader';


class Customer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "고객센터관리",
			pageTitleName: "고객센터",
			pageTitleNameSmall: "관리"
		}
	}

	render(){

		return(
			<div>
				<PageHeader
					pageTitle={this.state.pageTitle}
					pageTitleName={this.state.pageTitleName}
					pageTitleNameSmall={this.state.pageTitleNameSmall}
				/>
				<h2>Customer</h2>
			</div>
		)
	}
}


export default Customer;