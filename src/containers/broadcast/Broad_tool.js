import React from 'react';
import PageHeader from '../../components/PageHeader';


class Broad_tool extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "방송관리",
			pageTitleName: "방송",
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
				<h2>Broad_tool</h2>
			</section>
		)
	}
}


export default Broad_tool;