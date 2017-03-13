import React from 'react';
import PageHeader from '../../components/PageHeader';


class Channel extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "채널관리",
			pageTitleName: "채널",
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
				<h2>Channel</h2>
			</div>
		)
	}
}


export default Channel;