import React, {Component} from 'react';


class CoinContent1 extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		let listItem = '';
		if (typeof this.props.list === "object") {
			listItem = this.props.list.map(
				(list, i) => {
					if(this.props.listTypeIndex == i){
						return <CoinContent1Item
							index={i}
							className='active'

							user_id={list.user_id}
							user_nickname={list.user_nickname}
							user_email={list.user_email}
							user_name={list.user_name}
							user_registration_date={list.user_registration_date}
							user_last_login_date={list.user_last_login_date}
							user_join_type={list.user_join_type}
							user_status={list.user_status}
							user_coin_history_idx={list.user_coin_history_idx}
							user_coin_history_change={list.user_coin_history_change}
							user_coin_history_type={list.user_coin_history_type}
							user_coin_operation={list.user_coin_operation}
							user_coin_history_result={list.user_coin_history_result}
							user_coin_history_datetime={list.user_coin_history_datetime}
							user_coin_history_registration_date={list.user_coin_history_registration_date}

						/>
					}else{
						return <CoinContent1Item
							index={i}
							className=''

							user_id={list.user_id}
							user_nickname={list.user_nickname}
							user_email={list.user_email}
							user_name={list.user_name}
							user_registration_date={list.user_registration_date}
							user_last_login_date={list.user_last_login_date}
							user_join_type={list.user_join_type}
							user_status={list.user_status}
							user_coin_history_idx={list.user_coin_history_idx}
							user_coin_history_change={list.user_coin_history_change}
							user_coin_history_type={list.user_coin_history_type}
							user_coin_operation={list.user_coin_operation}
							user_coin_history_result={list.user_coin_history_result}
							user_coin_history_datetime={list.user_coin_history_datetime}
							user_coin_history_registration_date={list.user_coin_history_registration_date}

						/>
					}

				}
			)
		}


		return (

			<table className="table-primary">
				<thead>
				<tr>
					<th></th>
					<th>닉네임</th>
					<th>이메일</th>
					<th>이름</th>
					<th>가입일</th>
					<th>최종접속일</th>
					<th>가입방식</th>
					<th>상태</th>
					<th>로그 번호</th>
					<th>로그 변경점</th>
					<th>로그 타입</th>
					<th>coin_operation</th>
					<th>coin_history_result</th>
					<th>coin_history_datetime</th>
					<th>coin_history_registration_date</th>
				</tr>
				</thead>
				<tbody>
				</tbody>
				{ listItem }

			</table>

		);
	}
}

class CoinContent1Item extends Component {
	render() {
		return (
			<tr>
				<th>{this.props.index}</th>
				<td>{this.props.user_nickname}</td>
				<td>{this.props.user_email}</td>
				<td>{this.props.user_name}</td>
				<td>{this.props.user_registration_date}</td>
				<td>{this.props.user_last_login_date}</td>
				<td>{this.props.user_join_type}</td>
				<td>{this.props.user_status}</td>
				<td>{this.props.user_coin_history_idx}</td>
				<td>{this.props.user_coin_history_change}</td>
				<td>{this.props.user_coin_history_type}</td>
				<td>{this.props.user_coin_operation}</td>
				<td>{this.props.user_coin_history_result}</td>
				<td>{this.props.user_coin_history_datetime}</td>
				<td>{this.props.user_coin_history_registration_date}</td>
			</tr>
		)
	}

}

export default CoinContent1;

