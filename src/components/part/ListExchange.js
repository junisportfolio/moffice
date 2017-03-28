import React, {Component} from 'react';
import ListExchangeContent from './ListExchangeContent';

class ListExchange extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let list_content = "";
		if (typeof this.props.list === "object") {
			list_content = this.props.list.map(
				(list, i) => <ListExchangeContent
					list_index = {i}

					handleSelect={() => this.props.handleSelect(
						list.user_exchange_idx,
						list.user_coin,
						list.user_exchange_price,
						list.user_exchange_fee,
						list.user_exchange_status,
						list.user_exchange_ip,
						list.user_exchange_confirm_date,
						list.user_exchange_registration_date,
						list.user_id,
						list.user_email,
						list.user_nickname,
						list.user_name,
						list.user_registration_date,
						list.user_join_type,
						list.user_level,
						list.user_last_login_date,
						list.user_bank_account,
						list.user_identification,
					)}

					user_exchange_idx={list.user_exchange_idx}
					user_coin={list.user_coin}
					user_exchange_price={list.user_exchange_price}
					user_exchange_fee={list.user_exchange_fee}
					user_exchange_status={list.user_exchange_status}
					user_exchange_ip={list.user_exchange_ip}
					user_exchange_confirm_date={list.user_exchange_confirm_date}
					user_exchange_registration_date={list.user_exchange_registration_date}
					user_id={list.user_id}
					user_email={list.user_email}
					user_nickname={list.user_nickname}
					user_name={list.user_name}
					user_registration_date={list.user_registration_date}
					user_join_type={list.user_join_type}
					user_level={list.user_level}
					user_last_login_date={list.user_last_login_date}
					user_bank_account={list.user_bank_account}
					user_identification={list.user_identification}

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

export default ListExchange;

