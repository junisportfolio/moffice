import React from 'react';

export default class ListCashContent extends React.Component {

	render() {

		let status = '';
		switch (this.props.payment_status) {
			case 1:
				status = '승인';
				break;
			case 2:
				status = '대기';
				break;
			case 3:
				status = '취소';
				break;
			case 4:
				status = '실패';
				break;
			default:
				status = this.props.payment_status;
				break;
		}

		return (
			<li className={"list-item-1 has-right" + (this.props.current_idx === this.props.payment_idx ? " active" : "")} onClick={this.props.handleSelect}>
				<a>
					<span className="title">
						{this.props.payment_price} 원
					</span>
					<span className="text">
						{this.props.user_nickname}
					</span>
					<span className="right">
						{ status }
					</span>
				</a>
			</li>
		);
	}
}

/*
payment_idx
payment_order_id
user_id
user_nickname
payment_status
payment_price
payment_charge_coin
payment_type
payment_request_ip
payment_confirm_ip
payment_registration_date
payment_confirm_date
*/