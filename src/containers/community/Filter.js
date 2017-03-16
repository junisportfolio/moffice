import React from 'react';
import PageHeader from '../../components/PageHeader';


class Filter extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "필터링관리",
			pageTitleName: "필터링",
			pageTitleNameSmall: "관리"
		}
	}

	render(){

		return(
			<section className="content">
				<PageHeader
					pageTitle={this.state.pageTitle}
					pageTitleName={this.state.pageTitleName}
					pageTitleNameSmall={this.state.pageTitleNameSmall}
				/>
				<h2>Filter</h2>
			</section>
		)
	}
}


export default Filter;