import React from 'react';
import PageHeader from '../../components/PageHeader';


class Exchange extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "환전관리",
			pageTitleName: "환전",
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
				<h2>Exchange</h2>
			</div>
		)
	}
}


export default Exchange;