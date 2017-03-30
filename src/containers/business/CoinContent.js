import React, {Component} from 'react';


class CoinContent extends Component {

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
						<label className="control-label col-xs-4">닉네:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_nickname}
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
						<label className="control-label col-xs-4">코인 부여:</label>
						<div className="col-xs-8">

							<input
								type="number"
								name="input_coin"
								placeholder="꿀 부여"
								className="form-control"
								value={this.props.input_coin}
								onChange={this.props.handleChange}
							/>
							<input
								type="number"
								name="input_free_coin"
								placeholder="무료 꿀 부여"
								className="form-control"
								value={this.props.input_free_coin}
								onChange={this.props.handleChange}
							/>

							<button
								type="button"
								className="btn btn-primary"
								onClick={this.props.handleGive}
							>지급
							</button>
						</div>
					</div>


					<div className="form-group">
						<label className="control-label col-xs-4">코인 압류:</label>
						<div className="col-xs-8">

							<input
								type="number"
								name="input_coin_take"
								placeholder="일반 꿀 차감"
								className="form-control"
								value={this.props.input_coin_take}
								onChange={this.props.handleChange}
							/>
							<input
								type="number"
								name="input_free_coin_take"
								placeholder="무료 꿀 차감"
								className="form-control"
								value={this.props.input_free_coin_take}
								onChange={this.props.handleChange}
							/>

							<button
								type="button"
								className="btn btn-primary"
								onClick={this.props.handleTake}
							>차감
							</button>
						</div>
					</div>



				</form>
			</
				div >

		);
	}

}


export default CoinContent;

