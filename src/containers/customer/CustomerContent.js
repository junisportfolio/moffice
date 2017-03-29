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
							</label>
						</div>
					</div>



				</form>
			</div>
		);
	}

}

export default CustomerContent;






































