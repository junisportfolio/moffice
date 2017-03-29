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
						<label className="control-label col-xs-4" for="grade">제휴신청 순번</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_customer_alliance_idx}
							</label>
						</div>
						{/*<label className="control-label col-xs-4" for="grade">user_id</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_user_id}
							</label>
						</div>*/}
						<label className="control-label col-xs-4" for="grade">user_charge_name</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_user_charge_name}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">신청자 연락처</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_user_phone}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">신청자 이메일</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_user_email}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">신청자 답변용 이메일</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_user_id_reply}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">조회상태</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_customer_read_status}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">업체명</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_customer_alliance_company_name}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">제휴 유형</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_customer_alliance_type}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">제휴신청 제목</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_customer_alliance_subject}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">제휴신청 내용</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_customer_alliance_contents}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">action</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_customer_alliance_action}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">상태</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_customer_alliance_status}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">첨부파일</label>
						<div className="col-xs-8">
							<label className="control-label">
								<img className="img-responsive" src={process.env.img + this.props.data_customer_alliance_attachfile} />
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">답변</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_customer_alliance_reply}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">신청자 IP</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_customer_alliance_ip}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">답변일자</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_customer_alliance_reply_date}
							</label>
						</div>
						<label className="control-label col-xs-4" for="grade">등록일자</label>
						<div className="col-xs-8">
							<label className="control-label">
                {this.props.data_customer_alliance_registration_date}
							</label>
						</div>
					</div>
				</form>
			</div>
    );
  }

}

export default CustomerContent;






































