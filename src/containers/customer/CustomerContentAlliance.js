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
						<label className="control-label col-xs-4" for="grade">:</label>
						<div className="col-xs-8">
							<label className="control-label">
								{}
								data_customer_alliance_idx
								data_user_id
								data_user_charge_name
								data_user_phone
								data_user_email
								data_user_id_reply
								data_customer_read_status
								data_customer_alliance_company_name
								data_customer_alliance_type
								data_customer_alliance_subject
								data_customer_alliance_contents
								data_customer_alliance_action
								data_customer_alliance_status
								data_customer_alliance_attachfile
								data_customer_alliance_reply
								data_customer_alliance_ip
								data_customer_alliance_reply_date
								data_customer_alliance_registration_date
							</label>
						</div>
					</div>



				</form>
			</div>
		);
	}

}

export default CustomerContent;






































