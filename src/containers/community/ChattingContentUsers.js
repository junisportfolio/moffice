import React, {Component} from 'react';


class ChannelContentUsers extends Component {

	constructor(props) {
		super(props);
		this.state = {}

	}

	render() {



		let list_content = "접속한 유저 정보가 없습니다.";
		if (typeof this.props.list === "object") {
			console.log(JSON.stringify(this.props.list, null, 2));
			if(this.props.list.length != 0) {
				list_content = this.props.list.map(
					(list, i) => <ChannelContentUser
						user_id={list.user_id}
						user_fan={list.user_fan}
						user_level={list.user_level}
						user_grade={list.user_grade}
						user_nickname={list.user_nickname}
						user_manager={list.user_manager}
						user_silenced={list.user_silenced}
						user_silenced60={list.user_silenced60}
						handleManager={this.props.handleManager}
						handleUnmanager={this.props.handleUnmanager}
						handleSilence={this.props.handleSilence}
						handleUnsilence={this.props.handleUnsilence}
						handleOut={this.props.handleOut}
						data_broadcast_idx={this.props.data_broadcast_idx}
					/>
				)
			}
		}

		return (
			<div className="box box-danger">
				<div className="box-header with-border">
					<h3 className="box-title"><b>채팅방</b>참여자 리스트</h3>
				</div>
				<div className="box-body">
					<ul className="nav nav-stacked">
						{list_content}
					</ul>
				</div>
			</div>
		);
	}
}


class ChannelContentUser extends React.Component {
	render() {
		console.log(this.props);

		let grade = '';
		switch (+this.props.user_grade) {
			case 0:
				grade = "GUEST";
				break;
			case 10:
				grade = "일반사용자";
				break;
			case 20:
				grade = "BJ";
				break;
			case 30:
				grade = "운영자";
				break;
			default :
				grade = "얘 뭐야";
		}

		let manager_off = (
			<button type="button" className="btn btn-success" onClick={() => this.props.handleUnmanager(this.props.data_broadcast_idx, this.props.user_id)}>매니저 <i className="fa fa-toggle-on" aria-hidden="true"></i></button>
		)
		let manager_on = (
			<button type="button" className="btn btn-default" onClick={() => this.props.handleManager(this.props.data_broadcast_idx, this.props.user_id)}>매니저 <i className="fa fa-toggle-off" aria-hidden="true"></i></button>
		)

		let silenced60_off = (
			<button type="button" className="btn btn-warning" onClick={() => this.props.handleUnsilence(this.props.data_broadcast_idx, this.props.user_id)}>침묵 <i className="fa fa-toggle-on" aria-hidden="true"></i></button>
		)
		let silenced60_on = (
			<button type="button" className="btn btn-default" onClick={() => this.props.handleSilence(this.props.data_broadcast_idx, this.props.user_id)}>침묵 <i className="fa fa-toggle-off" aria-hidden="true"></i></button>
		)

		/*let silenced_off = (
			<button type="button" className="btn btn-warning" onClick={() => this.props.handleUnsilence(this.props.data_broadcast_idx, this.props.user_id)}>차단 <i className="fa fa-toggle-on" aria-hidden="true"></i></button>
		)
		let silenced_on = (
			<button type="button" className="btn btn-default" onClick={() => this.props.handleSilence(this.props.data_broadcast_idx, this.props.user_id)}>차단 <i className="fa fa-toggle-off" aria-hidden="true"></i></button>
		)
		*/
		let block = (
			<button type="button" className="btn btn-danger" onClick={() => this.props.handleOut(this.props.data_broadcast_idx, this.props.user_id)}>강퇴</button>
		);

		console.log(this.props.user_status);

		return (
			<li className="list-item-1 join-members">
							<span className="title">
			{this.props.user_nickname}
							</span>
				<span className="text">
					{grade}
							</span>
				<span className="right">
					{this.props.user_manager ? manager_off : manager_on}
					{this.props.user_silenced60 ? silenced60_off : silenced60_on}
					{block}
							</span>
			</li>
		)
	}
}


export default ChannelContentUsers;






































