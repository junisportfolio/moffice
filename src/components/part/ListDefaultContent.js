import React from 'react';

export default class ListDefaultContent extends React.Component {

	render() {

		let user_status = "";
		switch (this.props.user_status) {
			case "0":
				user_status = "삭제";
				break;
			case "1":
				user_status = "정상";
				break;
			case "2":
				user_status = "대기";
				break;
			case "8":
				user_status = "정지";
				break;
			case "9":
				user_status = "탈퇴";
				break;
			default :
				user_status = "";
		}


		return (
			<li className="list-item-1 has-right" >
				<a>
					<span className="title">
						{this.props.user_name}
					</span>
					<span className="text">
						{this.props.user_nickname}
					</span>
					<span className="right">
						({user_status})
					</span>
				</a>
			</li>
		);
	}
}

