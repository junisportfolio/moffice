import React, {Component} from 'react';


class ExchangeListContent extends Component {

	constructor(props) {
		super(props);
	}

	render() {


		let status = '';
		switch (this.props.data_user_exchange_status) {
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
				status = this.props.data_user_exchange_status;
				break;
		}


		return (

			<div className="box-body border-style">
				<form className="form-horizontal">
					<div className="form-group">
						<label className="control-label col-xs-4">신청 번호:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_exchange_idx}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">잔여 코인:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_coin}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">신청 금액:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_exchange_price}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">환전율:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_exchange_fee}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">신청 상태:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{ status }
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">출금신청 IP:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_exchange_ip}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">출금 신청일:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_exchange_registration_date}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">출금 확정일:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_exchange_confirm_date}
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
						<label className="control-label col-xs-4">닉네임:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_nickname}
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
						<label className="control-label col-xs-4">가입일:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_registration_date}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">가입 방식:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_join_type}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">유저 레벨:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_level}
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
						<label className="control-label col-xs-4">계좌 인증:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_bank_account}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">신분증 인증:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_identification}
							</label>
						</div>
					</div>
				</form>
			</div>
		)
			;
	}

}


export default ExchangeListContent;

