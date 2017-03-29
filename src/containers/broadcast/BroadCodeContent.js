import React, {Component} from 'react';


class BroadCodeContent extends Component {

  constructor(props) {
    super(props);
  }

  render() {


    let data_streamcode_status = '';
    switch (this.props.data_streamcode_status) {
      case 0:
        data_streamcode_status = '삭제';
        break;
      case 1:
        data_streamcode_status = '정상';
        break;
      case 2:
        data_streamcode_status = '대기';
        break;
      default:
        data_streamcode_status = this.props.data_streamcode_status;
        break;
    }

    const listView = (
			<form className="form-horizontal">
				<div className="form-group">
					<label className="control-label col-xs-4">코드 Index:</label>
					<div className="col-xs-8">
						<label className="control-label">
              { this.props.data_streamcode_idx }

						</label>
					</div>
				</div>

				<div className="form-group">
					<label className="control-label col-xs-4">코드 ID:</label>
					<div className="col-xs-8">
						<label className="control-label">
              { this.props.data_streamcode_id }

						</label>
					</div>
				</div>

				<div className="form-group">
					<label className="control-label col-xs-4">코드 URL:</label>
					<div className="col-xs-8">
						<label className="control-label">
              { this.props.data_streamcode_url }

						</label>
					</div>
				</div>

				<div className="form-group">
					<label className="control-label col-xs-4">코드 KEY:</label>
					<div className="col-xs-8">
						<label className="control-label">
              { this.props.data_streamcode_key }

						</label>
					</div>
				</div>

				<div className="form-group">
					<label className="control-label col-xs-4">코드 PW:</label>
					<div className="col-xs-8">
						<label className="control-label">
              { this.props.data_streamcode_password }

						</label>
					</div>
				</div>

				<div className="form-group">
					<label className="control-label col-xs-4">코드 상태:</label>
					<div className="col-xs-8">
						<label className="control-label">
              { data_streamcode_status }

						</label>
					</div>
				</div>

				<div className="form-group">
					<label className="control-label col-xs-4">코드 생성일:</label>
					<div className="col-xs-8">
						<label className="control-label">
              { this.props.data_streamcode_registration_date }

						</label>
					</div>
				</div>
        {
          this.props.data_user_id ? (
							<div className="form-group">
								<label className="control-label col-xs-4">코드 고정:</label>
								<div className="col-xs-8">
									<label className="control-label">
										고정됨
										<button type="button"
														className="btn btn-warning"
														onClick={ () => this.props.releaseStreamcode(this.props.data_user_id) }
										>해제하기
										</button>
									</label>
								</div>
							</div>
            ) : (
              ""
            )
        }
				<div className="form-group">
					<label className="control-label col-xs-4">코드 사용 번호:</label>
					<div className="col-xs-8">
						<label className="control-label">
              { this.props.data_streamcode_use_idx }

						</label>
					</div>
				</div>

				<div className="form-group">
					<label className="control-label col-xs-4">코드 사용 방송:</label>
					<div className="col-xs-8">
						<label className="control-label">
              { this.props.data_broadcast_idx }

						</label>
					</div>
				</div>

				<div className="form-group">
					<label className="control-label col-xs-4">코드 사용 생성일:</label>
					<div className="col-xs-8">
						<label className="control-label">
              { this.props.data_streamcode_use_registration_date }

						</label>
					</div>
				</div>



				<div className="form-group">
					<div className="col-sm-offset-4 col-xs-8">
						<button type="button"
										className="btn btn-warning"
										onClick={ this.props.toggleEdit }
						>수정
						</button>
						<button type="button"
										className="btn btn-danger"
										onClick={ this.props.deleteStreamcode }
						>삭제
						</button>
					</div>
				</div>
			</form>
    );

    const editView = (
			<form className="form-horizontal" onSubmit={e => e.preventDefault()}>
				<div className="form-group">
					<label className="control-label col-xs-4">코드 Index:</label>
					<div className="col-xs-8">
						<label className="control-label">
              { this.props.data_streamcode_idx }

						</label>
					</div>
				</div>

				<div className="form-group">
					<label className="control-label col-xs-4">코드 ID:</label>
					<div className="col-xs-8">
						<label className="control-label">
							<input type="text"
										 name="input_streamcode_id"
										 className="form-control"
										 value={ this.props.input_streamcode_id}
										 onChange={this.props.handleChange}
							/>
						</label>
					</div>
				</div>

				<div className="form-group">
					<label className="control-label col-xs-4">코드 URL:</label>
					<div className="col-xs-8">
						<label className="control-label">
							<input type="text"
										 name="input_streamcode_url"
										 className="form-control"
										 value={ this.props.input_streamcode_url}
										 onChange={this.props.handleChange}
							/>
						</label>
					</div>
				</div>

				<div className="form-group">
					<label className="control-label col-xs-4">코드 KEY:</label>
					<div className="col-xs-8">
						<label className="control-label">
							<input type="text"
										 name="input_streamcode_key"
										 className="form-control"
										 value={ this.props.input_streamcode_key}
										 onChange={this.props.handleChange}
							/>
						</label>
					</div>
				</div>

				<div className="form-group">
					<label className="control-label col-xs-4">코드 PW:</label>
					<div className="col-xs-8">
						<label className="control-label">
							<input type="text"
										 name="input_streamcode_password"
										 className="form-control"
										 value={ this.props.input_streamcode_password}
										 onChange={this.props.handleChange}
							/>
						</label>
					</div>
				</div>

				<div className="form-group">
					<label className="control-label col-xs-4">코드 상태:</label>
					<div className="col-xs-8">
						<label className="control-label">
							<select name="input_streamcode_status"
											className="form-control"
											value={ this.props.input_streamcode_status }
											onChange={this.props.handleChange}
							>
								<option value="0">삭제</option>
								<option value="1">정상</option>
								<option value="2">대기</option>
							</select>
						</label>
					</div>
				</div>

				<div className="form-group">
					<label className="control-label col-xs-4">코드 생성일:</label>
					<div className="col-xs-8">
						<label className="control-label">
              { this.props.data_streamcode_registration_date }

						</label>
					</div>
				</div>

        {this.props.editNew ? (
            ""
          ): [
						<div className="form-group">
							<label className="control-label col-xs-4">코드 사용 번호:</label>
							<div className="col-xs-8">
								<label className="control-label">
                  { this.props.data_streamcode_use_idx }

								</label>
							</div>
						</div>
            ,
						<div className="form-group">
							<label className="control-label col-xs-4">코드 사용 방송:</label>
							<div className="col-xs-8">
								<label className="control-label">
                  { this.props.data_broadcast_idx }

								</label>
							</div>
						</div>
            ,
						<div className="form-group">
							<label className="control-label col-xs-4">코드 사용 생성일:</label>
							<div className="col-xs-8">
								<label className="control-label">
                  { this.props.data_streamcode_use_registration_date }

								</label>
							</div>
						</div>
          ]}

				<div className="form-group">
					<div className="col-sm-offset-4 col-xs-8">
						<button type="button"
										className="btn btn-success"
										onClick={ this.props.confirmEdit }
						>확인
						</button>
						<button type="button"
										className="btn btn-warning"
										onClick={ this.props.cancelEdit }
						>취소
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

export default BroadCodeContent;
