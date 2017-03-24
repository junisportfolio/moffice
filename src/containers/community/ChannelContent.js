import React, {Component} from 'react';


class ChannelContent extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}

	}

	render() {

		return (
			<div className="box-body border-style">
				<form className="form-horizontal">
					<div className="form-group">
						<label className="control-label col-xs-4" for="grade">Channel 유저 번호:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_community_users_idx}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="grade">Channel 상태:</label>
						<div className="col-xs-8">

							<div className="input-group input-group-sm">
								<label className="control-label">
									{this.props.data_community_user_status}
								</label>
								<span className="input-group-btn">
													<button type="button" className="btn btn-warning btn-flat">수정</button>
											</span>
							</div>
						</div>

					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="grade">Channel 상태:</label>
						<div className="col-xs-8">

							<div className="input-group input-group-sm">
								<select className="form-control" value={this.props.data_community_user_status}>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
								<span className="input-group-btn">
													<button type="button" className="btn btn-success btn-flat">변경</button>
											</span>
							</div>
						</div>

					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="grade">Channel 레벨:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_community_user_level}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="id">Channel 가입:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_community_user_registration_date}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="id">Channel 프사:</label>
						<div className="col-xs-8">

							<div className="input-group input-group-sm">
								<img src={this.props.data_community_user_profile_image} alt="" width={50} height={50}/>
								<span className="input-group-btn">
													<button type="button" className="btn btn-warning btn-flat">수정</button>
												</span>
							</div>

						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="id">Channel 프사:</label>
						<div className="col-xs-8">

							<div className="input-group input-group-sm">
								<input type="file" name="data_community_user_profile_image" className="form-control"/>

								<span className="input-group-btn">
													<button type="button" className="btn btn-success btn-flat">변경</button>
													<button type="button" className="btn btn-danger btn-flat">취소</button>
												</span>
							</div>

						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="name">닉네임:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_nickname}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="nick">이름:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_name}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="grade">이메일:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_email}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="email">계정 생성일:</label>
						<div className="col-xs-8">

							<label className="control-label">
								{this.props.data_user_registration_date}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="email">최종 로그인:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_last_login_date}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="nick">유저 상태:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_status}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="nick">BJ 등록:</label>
						<div className="col-xs-8">
							<button className="btn btn-success">등록</button>
						</div>
					</div>
				</form>
			</div>
		);
	}

}

export default ChannelContent;






































