import React, {Component} from 'react';
import ListBroadContent from './ListBroadContent';

class ListBroad extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let list_content = "";
		if (typeof this.props.list === "object") {
			list_content = this.props.list.map(
				(list, i) => <ListBroadContent
					list_index = {i}

					broadcast_idx={list.broadcast_idx}
					community_id={list.community_id}
					user_id={list.user_id}
					broadcast_id={list.broadcast_id}
					broadcast_summary={list.broadcast_summary}
					broadcast_subject={list.broadcast_subject}
					broadcast_memo={list.broadcast_memo}
					broadcast_status={list.broadcast_status}
					broadcast_preview_status={list.broadcast_preview_status}
					broadcast_preview_time={list.broadcast_preview_time}
					broadcast_start_date={list.broadcast_start_date}
					broadcast_view_flag={list.broadcast_view_flag}
					broadcast_url={list.broadcast_url}
					broadcast_type={list.broadcast_type}
					broadcast_pay_flag={list.broadcast_pay_flag}
					broadcast_pay_price={list.broadcast_pay_price}
					broadcast_is_adult={list.broadcast_is_adult}
					broadcast_use_coin={list.broadcast_use_coin}
					broadcast_image={list.broadcast_image}
					broadcast_sequence={list.broadcast_sequence}
					broadcast_update_ip={list.broadcast_update_ip}
					broadcast_update_date={list.broadcast_update_date}
					broadcast_registration_ip={list.broadcast_registration_ip}
					broadcast_registration_date={list.broadcast_registration_date}
					broadcast_view_count={list.broadcast_view_count}
					user_nickname={list.user_nickname}
					user_email={list.user_email}
					user_name={list.user_name}
					user_registration_date={list.user_registration_date}
					user_last_login_date={list.user_last_login_date}
					user_join_type={list.user_join_type}
					user_status={list.user_status}


					handleSelect={() => this.props.handleSelect(list.broadcast_idx)}

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

export default ListBroad;

