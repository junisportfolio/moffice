import React, {Component} from 'react';


class BroadToolContent extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		let broadcast_status = '';
		switch (this.props.data_broadcast_status) {
			case 0:
				broadcast_status = '방송 삭제';
				break;
			case 1:
				broadcast_status = '방송 중';
				break;
			case 2:
				broadcast_status = '방송 종료';
				break;
			case 3:
				broadcast_status = '방송 준비중';
				break;
			default:
				broadcast_status = this.props.data_broadcast_status;
				break;
		}

		let broadcast_preview_status = '';
		switch (this.props.data_broadcast_preview_status) {
			case 1:
				broadcast_preview_status = '성공';
				break;
			case 2:
				broadcast_preview_status = '대기';
				break;
			default:
				broadcast_preview_status = this.props.data_broadcast_preview_status;
				break;
		}

		let data_broadcast_view_flag = '';
		switch (this.props.data_broadcast_view_flag) {
			case 0:
				data_broadcast_view_flag = '비노출';
				break;
			case 1:
				data_broadcast_view_flag = '노출';
				break;
			default:
				data_broadcast_view_flag = this.props.data_broadcast_view_flag;
				break;
		}

		let data_broadcast_type = '';
		switch (this.props.data_broadcast_type) {
			case 1:
				data_broadcast_type = 'Mocobee';
				break;
			case 2:
				data_broadcast_type = 'Youtube';
				break;
			case 3:
				data_broadcast_type = 'Twich';
				break;
			default:
				data_broadcast_type = this.props.data_broadcast_type;
				break;
		}

		let data_broadcast_live = '';
		switch (this.props.data_broadcast_live) {
			case 1:
				data_broadcast_live = '생방송';
				break;
			case 2:
				data_broadcast_live = '녹화방송';
				break;
			default:
				data_broadcast_live = this.props.data_broadcast_live;
				break;
		}

		let data_broadcast_pay_flag = '';
		switch (this.props.data_broadcast_pay_flag) {
			case 1:
				data_broadcast_pay_flag = '무료방송';
				break;
			case 2:
				data_broadcast_pay_flag = '유료방송';
				break;
			default:
				data_broadcast_pay_flag = this.props.data_broadcast_pay_flag;
				break;
		}

		let data_broadcast_is_adult = '';
		switch (this.props.data_broadcast_is_adult) {
			case 0:
				data_broadcast_is_adult = '미성년자 관람가능';
				break;
			case 1:
				data_broadcast_is_adult = '미성년자 관람불가';
				break;
			default:
				data_broadcast_is_adult = this.props.data_broadcast_is_adult;
				break;
		}

		let data_broadcast_use_coin = '';
		switch (this.props.data_broadcast_use_coin) {
			case 0:
				data_broadcast_use_coin = '불가';
				break;
			case 1:
				data_broadcast_use_coin = '가능';
				break;
			default:
				data_broadcast_use_coin = this.props.data_broadcast_use_coin;
				break;
		}









		const Mocobee = (
			<div className="mocobee form-group" style={{backgroundColor: 'rgba(245, 166, 35, 0.1)',textIndent: '10px'}}>

				<div className="form-group">
					<label className="control-label col-xs-4">HLS key:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_streamcode_key_hls }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">RTMP key:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_streamcode_key_rtmp }

						</label>
					</div>
				</div>

				<div className="form-group">
					<label className="control-label col-xs-4">HLS url:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_streamcode_url_hls }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">HDS url:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_streamcode_url_hds }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">SMOOTH url:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_streamcode_url_smooth }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">DASH url:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_streamcode_url_dash }

						</label>
					</div>
				</div>
			</div>
		);
		const Youtube = (
			<div className="youtube form-group" style={{backgroundColor: 'rgba(230, 33, 23, 0.1)'}}>
				<div className="form-group">
					<label className="control-label col-xs-4">Youtube ID:</label>
					<div className="col-xs-8">
						<label className="control-label">

							{ this.props.data_youtube_id }
						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">Youtube URL:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_youtube_play_url }

						</label>
					</div>
				</div>
			</div>
		);
		const Twich = (
			<div className="twich form-group" style={{backgroundColor: 'rgba(125, 91, 190, 0.1)'}}>
				<div className="form-group">
					<label className="control-label col-xs-4">Twitch ID:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_twitch_id }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">Twitch URL:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_twitch_play_url }

						</label>
					</div>
				</div>
			</div>
		);


		const listView = (
			<form className="form-horizontal">
				<div className="form-group">
					<label className="control-label col-xs-4">방송 번호:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_idx }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 채널:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_community_id }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">닉네임:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_user_nickname }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 제목:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_subject }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 설명:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_summary }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 메모:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_memo }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 상태:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ broadcast_status }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">미리보기 상태:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ broadcast_preview_status }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 미리보기 시간:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_preview_time }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 시작 일시:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_start_date }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 노출 여부:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ data_broadcast_view_flag }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 URL:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_url }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 유형:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ data_broadcast_type }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">생방송 여부:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ data_broadcast_live }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">유료 방송 여부:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ data_broadcast_pay_flag }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">유료 금액(물풍선):</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_pay_price }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">성인 여부:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ data_broadcast_is_adult }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송코인 선물기능 사용여부:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ data_broadcast_use_coin }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송국 이미지:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_image }

						</label>
					</div>
				</div>

				{/**/}

				<div className="form-group">
					<label className="control-label col-xs-4">data_broadcast_sequence:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_sequence }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">data_broadcast_update_ip:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_update_ip }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">data_broadcast_update_date:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_update_date }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 등록 IP:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_registration_ip }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 등록일:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_registration_date }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">커뮤니티 프로필 이미지:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_community_user_profile_image }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">data_broadcast_view_count:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_view_count }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송채팅 아이디:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_chat_id }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 채팅 잠금:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_chat_lock }

						</label>
					</div>
				</div>

				{ this.props.data_broadcast_type == 1 ? Mocobee : this.props.data_broadcast_type == 2 ? Youtube : this.props.data_broadcast_type == 3 ? Twich : '잘못된 정보입니다.'}

				<div className="form-group">
					<div className="col-sm-offset-4 col-xs-8">
						<button type="button"
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
					<label className="control-label col-xs-4">방송 번호:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_idx }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 채널:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_community_id }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">닉네임:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_user_nickname }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 제목:</label>
					<div className="col-xs-8">
						<input type="text"
									 name="data_broadcast_subject"
									 className="form-control"
									 value={ this.props.data_broadcast_subject }
						/>

					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 설명:</label>
					<div className="col-xs-8">
						<input type="text"
									 name="data_broadcast_summary"
									 className="form-control"
									 value={ this.props.data_broadcast_summary }
						/>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 메모:</label>
					<div className="col-xs-8">
						<input type="text"
									 name="data_broadcast_memo"
									 className="form-control"
									 value={ this.props.data_broadcast_memo }
						/>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 상태:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ broadcast_status }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">미리보기 상태:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ broadcast_preview_status }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 미리보기 시간:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_preview_time }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 시작 일시:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_start_date }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 노출 여부:</label>
					<div className="col-xs-8">
						<select name=""
										className="form-control"
										value={ this.props.data_broadcast_view_flag }
						>
							<option value="0">비노출</option>
							<option value="1">노출</option>
						</select>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 URL:</label>
					<div className="col-xs-8">
						<input type="text"
									 name="data_broadcast_url"
									 className="form-control"
									 value={ this.props.data_broadcast_url }
						/>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 유형:</label>
					<div className="col-xs-8">

						<select name="data_broadcast_type"
										className="form-control"
										value={ this.props.data_broadcast_type }
						>
							<option value="1">Mocobee</option>
							<option value="2">Youtube</option>
							<option value="3">Twich</option>
						</select>

					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">생방송 여부:</label>
					<div className="col-xs-8">

						<select name="data_broadcast_live"
										className="form-control"
										value={ this.props.data_broadcast_live }
						>
							<option value="1">생방송</option>
							<option value="2">녹화방송</option>
						</select>

					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">유료 방송 여부:</label>
					<div className="col-xs-8">

						<select name="data_broadcast_pay_flag"
										className="form-control"
										value={ this.props.data_broadcast_pay_flag }
						>
							<option value="1">무료방송</option>
							<option value="2">유료방송</option>
						</select>

					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">유료 금액(물풍선):</label>
					<div className="col-xs-8">

						<input type="number"
									 className="form-control"
									 name="data_broadcast_pay_price"
									 value={ this.props.data_broadcast_pay_price }
						/>

					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">성인 여부:</label>
					<div className="col-xs-8">

						<select name="data_broadcast_is_adult"
										className="form-control"
										value={ this.props.data_broadcast_is_adult }
						>
							<option value="0">미성년자 관람가능</option>
							<option value="1">미성년자 관람불가</option>
						</select>

					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송코인 선물기능 사용여부:</label>
					<div className="col-xs-8">

						<select name="data_broadcast_use_coin"
										className="form-control"
										value={ this.props.data_broadcast_use_coin }
						>
							<option value="0">불가</option>
							<option value="1">가능</option>
						</select>

					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송국 이미지:</label>
					<div className="col-xs-8">
						
						<input type="file"
									 className="form-control"
									 name="data_broadcast_image"
									 value={ this.props.data_broadcast_image }
						/>

					</div>
				</div>

				{/**/}

				<div className="form-group">
					<label className="control-label col-xs-4">data_broadcast_sequence:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_sequence }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">data_broadcast_update_ip:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_update_ip }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">data_broadcast_update_date:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_update_date }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 등록 IP:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_registration_ip }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 등록일:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_registration_date }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">커뮤니티 프로필 이미지:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_community_user_profile_image }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">data_broadcast_view_count:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_view_count }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송채팅 아이디:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_chat_id }

						</label>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-xs-4">방송 채팅 잠금:</label>
					<div className="col-xs-8">
						<label className="control-label">
							{ this.props.data_broadcast_chat_lock }

						</label>
					</div>
				</div>

				{ this.props.data_broadcast_type == 1 ? Mocobee : this.props.data_broadcast_type == 2 ? Youtube : this.props.data_broadcast_type == 3 ? Twich : '잘못된 정보입니다.'}

				<div className="form-group">
					<div className="col-sm-offset-4 col-xs-8">
						<button type="button"
										className="btn btn-warning"
										onClick={ this.props.toggleEdit }
						>수정
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

export default BroadToolContent;

