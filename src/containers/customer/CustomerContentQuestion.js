import React, {Component} from 'react';
import EditableInputGroup from '../../components/part/EditableInputGroup';

class CustomerContent extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}

	}

	parseStatus(status) {
		switch(status){
			case 0:
				return "삭제";
			case 1:
				return "정상";
			case 2:
				return "대기";
			case 9:
				return "탈퇴";
			default:
				return status;
		}
	}

	render() {

		return (
			<div className="box-body border-style">
				<form className="form-horizontal">

					<div className="form-group">
						<label className="control-label col-xs-4" for="grade">문의 순번:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_customer_question_idx}
							</label>
						</div>
						{/*<label className="control-label col-xs-4" for="grade">:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_id}
							</label>
						</div>*/}
						<label className="control-label col-xs-4" for="grade">문의자 이름:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_name}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">문의자 닉네임:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_nickname}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">문의자 연락처:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_phone}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">문의자 이메일:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_user_email}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">조회상태:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_customer_read_status}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">문의 유형:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_customer_question_type}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">문의 제목:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_customer_question_subject}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">문의 내용:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_customer_question_contents}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">question_action:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_customer_question_action}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">문의 상태:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_customer_question_status}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">문의 조회 상태:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_customer_question_read_status}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">문의 답변:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_customer_question_reply}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">문의 IP:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_customer_question_ip}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">문의 답변일자:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_customer_question_reply_date}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">문의 등록 일자:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_customer_question_registration_date}
							</label>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default CustomerContent;






































