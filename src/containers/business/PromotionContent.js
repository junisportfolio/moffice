import React, {Component} from 'react';


class PromotionContent extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const listView = (
			<form className="form-horizontal" onSubmit={event => event.preventDefault()}>
				<div className="form-group">
					<label className="control-label col-xs-4">프로모션 이름:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_promotion_name}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">코인 최대치:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_promotion_coin_max}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">지급 코인:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_promotion_coin}
						</label>
					</div>
				</div>
				<div className="form-group hidden">
					<label className="control-label col-xs-4">담당자 아이디:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_user_id}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">코인 상태:</label>
					<div className="col-xs-8">
						<label className="control-label">
              {this.props.data_promotion_coin_status}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">시작일:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_promotion_coin_start_date}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">종료일:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_promotion_coin_end_date}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">코인 타입:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_promotion_coin_type}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">등록일:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_promotion_coin_registration_date}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">카운트:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_promotion_count}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">상태:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_promotion_status}
						</label>
					</div>
				</div>
				<div className="form-group">
					<div className="col-sm-offset-4 col-xs-8">
						<button
							className="btn btn-warning"
							onClick={ this.props.toggleEdit }
						>수정
						</button>
					</div>
				</div>
			</form>
		);

		const editView = (
			<form className="form-horizontal">

				<div className="form-group">
					<label className="control-label col-xs-4">프로모션 이름:</label>
					<div className="col-xs-8">

						<input type="text"
									 className="form-control"
									 name="input_promotion_coin_name"
									 onChange={this.props.handleChange}
									 value={this.props.input_promotion_coin_name}/>


					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">코인 최대치:</label>
					<div className="col-xs-8">
						<input type="text"
									 className="form-control"
									 name="input_promotion_coin_max"
									 onChange={this.props.handleChange}
									 value={this.props.input_promotion_coin_max}/>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">지급 코인:</label>
					<div className="col-xs-8">

						<input type="text"
									 className="form-control"
									 name="input_promotion_coin"
									 onChange={this.props.handleChange}
									 value={this.props.input_promotion_coin}/>


					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">코인 상태:</label>
					<div className="col-xs-8">
						<select name="input_promotion_coin_status"
										value={this.props.input_promotion_coin_status}
										onChange={this.props.handleChange}
										className="form-control"

						>
							<option value="0">상태 0 </option>
							<option value="1">적용</option>
							<option value="2">대기</option>
						</select>

					</div>
				</div>

				<div className="form-group hidden">
					<label className="control-label col-xs-4">담당자 아이디:</label>
					<div className="col-xs-8">

						<label className="control-label">
							{this.props.data_user_id}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">시작일:</label>
					<div className="col-xs-8">

						<label className="control-label">
							{this.props.data_promotion_coin_start_date}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">종료일:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_promotion_coin_end_date}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">코인 타입:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_promotion_coin_type}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">등록일:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_promotion_coin_registration_date}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">카운트:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_promotion_count}
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">상태:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{this.props.data_promotion_status}
						</label>
					</div>
				</div>
				<div className="form-group">
					<div className="col-sm-offset-4 col-xs-8">
						<button
							type="button"
							className="btn btn-warning"
							onClick={ this.props.toggleEdit }
						>취소
						</button>
						<button
							type="button"
							className="btn btn-success"
							onClick={ this.props.editUserData }
						>완료
						</button>
					</div>
				</div>

			</form>
		);


		return (
			<div className="box-body border-style">
				{ this.props.editMode ? editView : listView}
			</div>

		);
	}

}

export default PromotionContent;

