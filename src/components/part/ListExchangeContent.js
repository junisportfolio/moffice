import React from 'react';

export default class ListExchangeContent extends React.Component {

	render() {

		let status = '';
		switch (this.props.user_exchange_status) {
			case 1:
				status = '승인';
				break;
			case 2:
				status = '대기';
				break;
			case 3:
				status = '취소';
				break;
			default:
				status = this.props.user_exchange_status;
				break;
		}

		return (
			<li className={"list-item-1 has-right" + (this.props.current_idx === this.props.user_exchange_idx ? " active" : "")} onClick={this.props.handleSelect}>
				<a>
					<span className="title">
						{this.props.user_name}
					</span>
					<span className="text">
						{this.props.user_exchange_price} 원
					</span>
					<span className="right">
						{ status }
					</span>
				</a>
			</li>
		);
	}
}
