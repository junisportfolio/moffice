import React, {Component} from 'react';


class ExchangeContent extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="box-body border-style">
				<form className="form-horizontal">
					<div className="form-group">
						<label className="control-label col-xs-4">이름:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_name}
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
						<label className="control-label col-xs-4">유저상태:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_status}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">일반 코인:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_coin}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">무료 코인:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_free_coin}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">코인 합계:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_total_coin}
							</label>
						</div>
					</div>

					<div className="form-group">
						<label className="control-label col-xs-4">코인 출금:</label>
						<div className="col-xs-8">
							<div className="input-group">

								<input
									id="give_coin"
									type="number"
									name="give_coin"
									placeholder="꿀 출금"
									className="form-control"
									value={this.props.take_coin}
								/>

								<span className="input-group-btn">
									<button
										className="btn btn-primary btn-flat"
										onClick={this.props.handleTake}
									>출금
									</button>
								</span>

							</div>
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
						<label className="control-label col-xs-4">계정생성일:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_registration_date}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">최종접속일:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_last_login_date}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">가입방식:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_join_type}
							</label>
						</div>
					</div>

				</form>
			</
				div >

		)
			;
	}

}


export default ExchangeContent;

