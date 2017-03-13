import React from 'react';
import PageHeader from '../../components/PageHeader';


class Coin extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "꿀관리",
			pageTitleName: "꿀",
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
				<h2>Coin</h2>
			</div>
		)
	}
}


export default Coin;