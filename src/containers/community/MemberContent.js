import React, {Component} from 'react';


class MemberContent extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const listView = (
			<form className="form-horizontal" onSubmit={event => event.preventDefault()}>
				<div className="form-group">
					<label className="control-label col-xs-4">유저 등급:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_user_level}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">이름:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_user_name}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">성별:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_user_gender}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">닉네임:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_user_nickname}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">생년월일:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_user_birth}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">이메일:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_user_email}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">유저상태:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_user_status}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">보유 코인:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_user_coin}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">보유 포인트:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_user_point}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">계정 생성일:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_user_registration_date}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">최종 로그아웃:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_user_last_login_date}
						</label>
					</div>
				</div>
				<div className="form-group">
					<div className="col-sm-offset-4 col-xs-8">
						<button
							className="btn btn-warning"
							onClick={ this.props.toggleEdit }
						>수정
						</button>
					</div>
				</div>
			</form>
		);

		const editView = (
			<form className="form-horizontal" onSubmit={event => event.preventDefault()}>
				<div className="form-group">
					<label className="control-label col-xs-4">유저 등급:</label>
					<div className="col-xs-8">
						<div className="form-group">
							<select className="form-control"
											name="data_user_level"
											value={this.props.input_user_level}
											onChange={this.props.handleLevel}
							>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
							</select>
						</div>

					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">이름:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_user_name}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">성별:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_user_gender}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">생년월일:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_user_birth}
						</label>
					</div>
				</div>
				{/*
				<div className="form-group">
					<label className="control-label col-xs-4">이름:</label>
					<div className="col-xs-8">
						<input type="text"
									 className="form-control"
									 name="data_user_name"
									 value={this.props.data_user_name}
									 placeholder=""
									 onChange={this.props.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">성별:</label>
					<div className="col-xs-8">

						<div className="from-group">
							<select className="form-control"
											name="data_user_gender"
											value={this.props.data_user_gender}
											onChange={this.props.handleChange}
							>
								<option value="M">남성</option>
								<option value="F">여성</option>
							</select>
						</div>

					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">생년월일:</label>
					<div className="col-xs-8">
						<input
							type="text"
							className="form-control"
							name="data_user_birth"
							value={this.props.data_user_birth}
							onChange={this.props.handleChange}
							placeholder=""
						/>

					</div>
				</div>
				*/}
				<div className="form-group">
					<label className="control-label col-xs-4">닉네임:</label>
					<div className="col-xs-8">
						<input type="text"
									 className="form-control"
									 name="data_user_nickname"
									 value={this.props.input_user_nickname}
									 placeholder=""
									 onChange={this.props.handleNickname}
						/>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">이메일:</label>
					<div className="col-xs-8">
						<input
							type="text"
							className="form-control"
							name="data_user_email"
							value={this.props.input_user_email}
							onChange={this.props.handleEmail}
							placeholder=""
						/>

					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">유저상태:</label>
					<div className="col-xs-8">
						<div className="from-group">
							<select className="form-control"
											name="data_user_status"
											value={this.props.input_user_status}
											onChange={this.props.handleStatus}
							>
								<option value="0">삭제</option>
								<option value="1">정상</option>
								<option value="2">대기</option>
								<option value="8">정지</option>
								<option value="9">탈퇴</option>
							</select>
						</div>

					</div>

				</div>

				<div className="form-group">
					<label className="control-label col-xs-4">보유 코인:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_user_coin}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">보유 포인트:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_user_point}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">계정 생성일:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_user_registration_date}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">최종 로그아웃:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_user_last_login_date}
						</label>
					</div>
				</div>

				<div className="form-group">
					<div className="col-sm-offset-4 col-xs-8">
						<button
							type="button"
							className="btn btn-warning"
							onClick={ this.props.toggleEdit }
						>취소
						</button>
						<button
							type="button"
							className="btn btn-success"
							onClick={ this.props.editUserData}
						>완료
						</button>
					</div>
				</div>

			</form>
		);


		return (
			<div className="box-body border-style">
				{ this.props.editMode ? editView : listView}
			</div>

		);
	}

}

export default MemberContent;

