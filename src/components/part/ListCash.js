import React, {Component} from 'react';
import ListCashContent from './ListCashContent';

class ListCash extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let list_content = "";
		if (typeof this.props.list === "object") {
			list_content = this.props.list.map(
				(list, i) => <ListCashContent
					list_index = {i}

					handleSelect={() => this.props.handleSelect(
						list.payment_idx,
						list.payment_order_id,
						list.user_id,
						list.user_nickname,
						list.payment_status,
						list.payment_price,
						list.payment_charge_coin,
						list.payment_type,
						list.payment_request_ip,
						list.payment_confirm_ip,
						list.payment_registration_date,
						list.payment_confirm_date,
					)}

					payment_idx={list.payment_idx}
					payment_order_id={list.payment_order_id}
					user_id={list.user_id}
					user_nickname={list.user_nickname}
					payment_status={list.payment_status}
					payment_price={list.payment_price}
					payment_charge_coin={list.payment_charge_coin}
					payment_type={list.payment_type}
					payment_request_ip={list.payment_request_ip}
					payment_confirm_ip={list.payment_confirm_ip}
					payment_registration_date={list.payment_registration_date}
					payment_confirm_date={list.payment_confirm_date}


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

export default ListCash;
