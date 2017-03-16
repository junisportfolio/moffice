import React from 'react';
import PageHeader from '../../components/PageHeader';


class Product extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "상품관리",
			pageTitleName: "상품",
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
				<h2>Product</h2>
			</section>
		)
	}
}


export default Product;