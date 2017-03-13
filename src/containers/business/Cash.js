import React from 'react';
import PageHeader from '../../components/PageHeader';


class Cash extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "결제관리",
			pageTitleName: "결제",
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
				<h2>Cash</h2>
			</div>
		)
	}
}


export default Cash;