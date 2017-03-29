import React, {Component} from 'react';
import ListCoinContent from './ListCoinContent';

class ListCoin extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let list_content = "";
		if (typeof this.props.list === "object") {
			list_content = this.props.list.map(
				(list, i) => <ListCoinContent
					list_index = {i}

					handleSelect={() => this.props.handleSelect(
						list.user_id,
						list.user_nickname,
						list.user_email,
						list.user_name,
						list.user_registration_date,
						list.user_last_login_date,
						list.user_join_type,
						list.user_status,
						list.user_coin,
						list.user_free_coin,
						list.user_total_coin
					)}

					current_idx={this.props.current_idx}

					user_id={list.user_id}
					user_nickname={list.user_nickname}
					user_email={list.user_email}
					user_name={list.user_name}
					user_registration_date={list.user_registration_date}
					user_last_login_date={list.user_last_login_date}
					user_join_type={list.user_join_type}
					user_status={list.user_status}
					user_coin={list.user_coin}
					user_free_coin={list.user_free_coin}
					user_total_coin={list.user_total_coin}

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

export default ListCoin;

