import React, {Component} from 'react';


class CashContent extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		let status = '';
		switch (this.props.data_payment_status) {
			case 1:
				status = '승인';
				break;
			case 2:
				status = '대기';
				break;
			case 3:
				status = '취소';
				break;
			case 4:
				status = '실패';
				break;
			default:
				status = this.props.data_payment_status;
				break;
		}

		let payType = '';
		switch (this.props.data_payment_type) {
			case 1:
				payType = '카드';
				break;
			case 2:
				payType = '휴대전화';
				break;
			case 3:
				payType = '문화상품권';
				break;
			case 4:
				payType = '가상계좌';
				break;
			case 5:
				payType = '실시간계좌이체';
				break;
			case 9:
				payType = '무통장입금';
				break;
			default:
				payType = this.props.data_payment_type;
				break;
		}

		let virtual_payment = (
			<div className="form-group">
				<label className="control-label col-xs-4">결제 여부:</label>
				<div className="col-xs-8">
					<label className="control-label">
						{ this.props.data_virtual_payment ? '결제완료' : '미결제' }
					</label>
				</div>
			</div>
		);


		return (
			<div className="box-body border-style">
				<form className="form-horizontal">
					<div className="form-group">
						<label className="control-label col-xs-4">결제 번호:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_payment_idx}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">유저 닉네임:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_nickname}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">결제 상태:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{ status }
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">충전 코인 수량:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_payment_charge_coin}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">결제 방식:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{ payType }
							</label>
						</div>
					</div>

					{this.props.data_payment_type == 4 ? virtual_payment : ''}

					<div className="form-group">
						<label className="control-label col-xs-4">요청 IP:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_payment_request_ip}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">승인 IP:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_payment_confirm_ip}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">등록 일시:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_payment_registration_date}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">승인 일시:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_payment_confirm_date}
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


export default CashContent;

