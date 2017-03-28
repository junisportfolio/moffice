import React, {Component} from 'react';
import ListProductContent from './ListProductContent';

class ListProduct extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let list_content = "";



		if (typeof this.props.list === "object") {
			list_content = this.props.list
				.sort(function (a, b) {
					return a.product_idx < b.product_idx ? -1 : a.product_idx > b.product_idx ? 1 : 0;
				})
				.map((list, i) => <ListProductContent
					list_index = {i}
					index={i}
					className={`product-item index-${i}`}
					product_idx={list.product_idx}
					product_id={list.product_id}
					product_name={list.product_name}
					product_price={list.product_price}
					product_coin={list.product_coin}
					product_status={list.product_status}
					product_image={list.product_image}
					product_sequence={list.product_sequence}
					product_point_registration_date={list.product_point_registration_date}


					handleSelect={() => this.props.handleSelect(list.promotion_coin_idx)}

				/>
			)
		}
		console.log(list_content)

		return (
			<ul className="products-list">
				{list_content}
			</ul>
		);
	}

}

export default ListProduct;
