import React, {Component} from 'react';
import EditableInputGroup from '../../components/part/EditableInputGroup';


class ChannelContent extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}

	}

	render() {
		let managers = "";
		let silences = "";

    if(this.props.data_join_managers) {
      managers = this.props.data_join_managers.map(manager =>
        (<button className="btn btn-default" onClick={() => this.props.handleUnmanager(this.props.data_broadcast_idx, manager.user_id)}>{manager.user_nickname}<span className="badge">해제</span></button>)
      );
    } else {
      managers = "등록된 매니져가 없습니다.";
    }

    if(managers.length === 0) {
      managers = "등록된 매니져가 없습니다.";
		}

    if(this.props.data_silence_users) {
      silences = this.props.data_silence_users.map(silence =>
        (<button className="btn btn-default" onClick={() => this.props.handleUnsilence(this.props.data_broadcast_idx, silence.user_id)}>{silence.user_nickname}<span className="badge">해제</span></button>)
      );
    } else {
      silences = "침묵 사용자가 없습니다.";
    }

    if(silences.length === 0) {
      silences = "침묵 사용자가 없습니다.";
    }

    let virtualCount = "";

    if(this.props.virtual_count_edit_mode) {
      virtualCount = [
				<input type="text"
				 className="form-control"
				 name="data_broadcast_chat_virtual_count"
				 value={this.props.input_broadcast_chat_virtual_count}
				 onChange={this.props.handleVirtualCountChange}
				/>,
				<span className="input-group-btn">
					<button key="editable_input_button0" type="button" className="btn btn-success btn-flat" onClick={this.props.handleVirtualCount}>변경</button>,
					<button key="editable_input_button1" type="button" className="btn btn-danger btn-flat" onClick={this.props.handleToggleEditState}>취소</button>
				</span>
			];
		} else {
      virtualCount = [
				<label className="control-label">
          {this.props.data_broadcast_chat_virtual_count || 0}
				</label>,
				<span className="input-group-btn">
					<button key="editable_input_button2" type="button" className="btn btn-warning btn-flat" onClick={this.props.handleToggleEditState}>수정</button>
				</span>
			];
		}

		return (

			<div className="box box-success">
				<div className="box-header with-border">
					<h3 className="box-title"><b>{this.props.data_broadcast_chat_name || ""}</b>의 방정보</h3>
				</div>
				<div className="box-body border-style">
					<form className="form-horizontal" onSubmit={event => event.preventDefault()}>
						<div className="form-group">
							<label className="control-label col-xs-4" htmlFor="grade">채팅방 번호:</label>
							<div className="col-xs-8">
								<label className="control-label">
									{this.props.data_broadcast_idx || ""}
								</label>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-xs-4" htmlFor="grade">채팅방 이름:</label>
							<div className="col-xs-8">

								<div className="input-group input-group-sm">
									<label className="control-label">
										{this.props.data_broadcast_chat_name || ""}
									</label>
									{/*<span className="input-group-btn">
													<button type="button" className="btn btn-warning btn-flat">수정</button>
											</span>*/}
								</div>
							</div>

						</div>
						<div className="form-group">
							<label className="control-label col-xs-4" for="grade">채팅방 사이트:</label>
							<div className="col-xs-8">
								<label className="control-label">
									{this.props.data_broadcast_chat_site || ""}
								</label>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-xs-4" for="id">채팅방 생성일:</label>
							<div className="col-xs-8">
								<label className="control-label">
									{this.props.data_broadcast_chat_registration_date || ""}
								</label>
							</div>
						</div>

						<div className="form-group">
							<label className="control-label col-xs-4" for="id">채팅방 가상인원:</label>
							<div className="col-xs-8">
								<div className="input-group input-group-sm">
                  {virtualCount}
								</div>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-xs-4" for="name">채팅방 공지:</label>
							<div className="col-xs-8">
								<label className="control-label">
									false
								</label>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-xs-4" for="nick">채팅방 채널:</label>
							<div className="col-xs-8">
								<label className="control-label">
									{this.props.data_community_id || ""}
								</label>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-xs-4" for="grade">채팅방 주인장:</label>
							<div className="col-xs-8">
								<label className="control-label">
									{this.props.data_user_nickname || ""}
								</label>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-xs-4" for="email">채팅방 매니져:</label>
							<div className="col-xs-8">
								{managers}
							</div>
						</div>
						{/*<div className="form-group">
							<label className="control-label col-xs-4" for="email">채팅방 차단:</label>
							<div className="col-xs-8">

								<button className="btn btn-default">홍길동 <span className="badge">해제</span></button>
							</div>
						</div>*/}
						<div className="form-group">
							<label className="control-label col-xs-4" for="nick">채팅방 침묵:</label>
							<div className="col-xs-8">
								{silences}
							</div>
						</div>
						{/*<hr/>
						<div className="form-group">
							<label className="control-label col-xs-4" for="nick">사용자 전체 강퇴:</label>
							<div className="col-xs-8">
								<button className="btn btn-danger">전체 강퇴</button>
							</div>
						</div>*/}
					</form>
				</div>
			</div>
		);
	}

}

export default ChannelContent;






































