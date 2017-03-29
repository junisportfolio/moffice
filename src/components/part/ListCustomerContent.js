import React from 'react';

export default class ListCustomerContent extends React.Component {

	render() {

		let user_status = "";
			let status = +this.props.user_status;
			switch (status) {
				case 0:
					user_status = "삭제";
					break;
				case 1:
					user_status = "정상";
					break;
				case 2:
					user_status = "대기";
					break;
				case 8:
					user_status = "정지";
					break;
				case 9:
					user_status = "탈퇴";
					break;
				default :
					user_status = "";
			}


		return (
			<li className="list-item-1 has-right" onClick={this.props.handleSelect}>
				<a>
					<span className="text">
						{this.props.dataText}
					</span>
					<span className="title">
						{this.props.dataTitle}
					</span>
					<span className="right">
						({this.props.dataRight})
					</span>
				</a>
			</li>
		);
	}
}

