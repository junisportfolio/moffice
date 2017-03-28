import React, {Component} from 'react';
import ListPromotionContent from './ListPromotionContent';

class ListPromotion extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let list_content = "";
		if (typeof this.props.list === "object") {
			list_content = this.props.list.map(
				(list, i) => <ListPromotionContent
					list_index = {i}

					promotion_coin_idx={list.promotion_coin_idx}
					promotion_name={list.promotion_name}
					promotion_coin_id={list.promotion_coin_id}
					promotion_coin_max={list.promotion_coin_max}
					promotion_coin={list.promotion_coin}
					user_id={list.user_id}
					promotion_coin_start_date={list.promotion_coin_start_date}
					promotion_coin_end_date={list.promotion_coin_end_date}
					promotion_coin_status={list.promotion_coin_status}
					promotion_coin_type={list.promotion_coin_type}
					promotion_coin_registration_date={list.promotion_coin_registration_date}
					promotion_count={list.promotion_count}
					promotion_status={list.promotion_status}

					handleSelect={() => this.props.handleSelect(list.promotion_coin_idx)}

				/>
			)
		}

		return (
			<ul className="nav nav-stacked">
				{list_content}
			</ul>
		);
	}

}

export default ListPromotion;

