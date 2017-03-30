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
						<label className="control-label col-xs-4" for="grade">신고번호:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{this.props.data_customer_claim_idx}{/*{this.props.data_user_id}*/}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="grade">신고자 닉네임:</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_user_nickname}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="grade">신고자 이메일:</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_user_email}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="grade">조회 상태:</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_customer_read_status}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="grade">신고 유형:</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_customer_claim_type}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="grade">신고글 제목:</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_customer_claim_subject}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="grade">신고글 내용:</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_customer_claim_contents}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="grade">신고상태:</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_customer_claim_status}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="grade">신고글 답변:</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_customer_claim_reply}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="grade">신고 이미지:</label>
						<div className="col-xs-8">
							<label className="control-label">
                <img className="img-responsive" src={process.env.img + this.props.data_customer_claim_image} />
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="grade">신고 IP:</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_customer_claim_ip}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="grade">신고 답변일:</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_customer_claim_reply_date}
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4" for="grade">신고 등록일:</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_customer_claim_registration_date}
							</label>
						</div>
					</div>
				</form>
			</div>
		);
	}

}

export default CustomerContent;






































