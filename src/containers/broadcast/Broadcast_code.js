import React from 'react';
import PageHeader from '../../components/PageHeader';


class Broadcast_code extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "방송코드관리",
			pageTitleName: "방송코드",
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
				<h2>Broadcast_code</h2>
			</div>
		)
	}
}


export default Broadcast_code;