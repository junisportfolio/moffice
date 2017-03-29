import React from 'react';
import jasync from '../../jasync';
import PageHeader from '../../components/PageHeader';
import {
	BoxTitle,
	Button, Label,
	Input, InputGroup, InputGroupBtn,
	ListDefault,
	ListBroad,
	Pagination
} from '../../components/part/';
import BroadToolContent from './BroadToolContent'


class BroadTool extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "방송관리",
			pageTitleName: "방송",
			pageTitleNameSmall: "관리",
			board: '',
			keyword: '',
			keyword_option: 'user_name',
			search_keyword: '',
			editMode: false,

			limit: 10,
			list: '',
			list_Tcount: '',
			list_Tpage: '',
			list_page: 1,

			data: '',
			user_info: '',

      input_community_id: "",
      input_user_id: "",
      input_broadcast_summary: "",
      input_broadcast_subject: "",
      input_broadcast_memo: "",
      input_broadcast_start_date: "",
      input_broadcast_view_flag: "",
      input_broadcast_url: "",
      input_broadcast_type: "",
      input_broadcast_pay_flag: "",
      input_broadcast_pay_price: "",
      input_broadcast_is_adult: "",
      input_broadcast_live: "",
      input_broadcast_sequence: "",
      input_broadcast_image: "",
      input_broadcast_use_coin: ""

		}

		this.handleSearch = this.handleSearch.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.editUserData = this.editUserData.bind(this);
		this.handlePagination = this.handlePagination.bind(this);

	}

	handleChange(e) {
		let nextState = {};
		nextState[e.target.name] = e.target.value;
		this.setState(nextState);
	}

	toggleEdit() {
		this.setState({
			editMode: !this.state.editMode,
      input_broadcast_summary: this.state.data_broadcast_summary,
      input_broadcast_subject: this.state.data_broadcast_subject,
      input_broadcast_memo: this.state.data_broadcast_memo,
      input_broadcast_start_date: this.state.data_broadcast_start_date,
      input_broadcast_view_flag: this.state.data_broadcast_view_flag,
      input_broadcast_url: this.state.data_broadcast_url,
      input_broadcast_type: this.state.data_broadcast_type,
      input_broadcast_pay_flag: this.state.data_broadcast_pay_flag,
      input_broadcast_pay_price: this.state.data_broadcast_pay_price,
      input_broadcast_is_adult: this.state.data_broadcast_is_adult,
      input_broadcast_live: this.state.data_broadcast_live,
      input_broadcast_sequence: this.state.data_broadcast_sequence,
      input_broadcast_image: this.state.data_broadcast_image,
      input_broadcast_use_coin: this.state.data_broadcast_use_coin
		});
	}

	handleSelect(user_id) {
		this.setState({
			user_info: user_id
		}, () => {
			this.getUserData(this.state.user_info);
		});
	}

	handlePagination(index) {
		this.setState({
			list_page: index
		}, () => {
			this.getUserList();
		});
	}

	handleSearch(keyword, option) {
		jasync.get({
			url: "/private/v1/promotion",
			data: {
				page: this.state.list_page,
				limit: this.state.limit,
				'search_type[]': option,
				'search_value[]': keyword
			},
			success: data => {
				this.setState({
					list: data.list,
					total_count: data.total_count,
					user_info: data.list[0].promotion_coin_idx
				});
				this.getUserData(this.state.user_info);
			}
		});


	}

	editUserData() {
		jasync.post({
			url: "/private/v1/promotion/" + this.state.data_promotion_coin_idx + "/modify",
			data: {
				promotion_coin_idx: this.state.data_promotion_coin_idx,
				promotion_coin_name: this.state.data_promotion_coin_name,
				promotion_coin_max: this.state.data_promotion_coin_max,
				promotion_coin: this.state.data_promotion_coin,
				promotion_coin_status: 1,
			},
			success: data => {
				alert('변경되었습니다');
				this.setState({
					editMode: false
				}, () => {
					this.getUserData(this.state.user_info);
				});

			}
		});
	}



	componentDidMount() {
		this.getUserList();

	}

	componentDidUpdate() {

	}


	// List viewer
	getUserList() {
		jasync.get({
			url: "/private/v1/broadcast/",
			data: {
				page: this.state.list_page,
				limit: this.state.limit
			},
			success: data => {
				this.setState({
					list: data.broadcast,

					list_Tcount: +data.total_count,
					list_Tpage: +data.total_page,
					list_page: +data.page,

					total_count: data.total_count,
					user_info: data.broadcast[0].broadcast_idx
				});
				this.getUserData(this.state.user_info);
			}
		});
	}

	// Content viewer
	getUserData(broadcast_idx) {
		jasync.get({
			url: "/private/v1/broadcast/" + broadcast_idx,
			success: data => {
				let info = data.broadcast;
				this.setState({

					data_broadcast_idx: info.broadcast_idx,
					data_community_id: info.community_id,
					data_user_id: info.user_id,
					data_broadcast_id: info.broadcast_id,
					data_broadcast_summary: info.broadcast_summary,
					data_broadcast_subject: info.broadcast_subject,
					data_broadcast_memo: info.broadcast_memo,
					data_broadcast_status: info.broadcast_status,
					data_broadcast_preview_status: info.broadcast_preview_status,
					data_broadcast_preview_time: info.broadcast_preview_time,
					data_broadcast_start_date: info.broadcast_start_date,
					data_broadcast_view_flag: info.broadcast_view_flag,
					data_broadcast_url: info.broadcast_url,
					data_broadcast_type: info.broadcast_type,
					data_broadcast_live: info.broadcast_live,
					data_broadcast_pay_flag: info.broadcast_pay_flag,
					data_broadcast_pay_price: info.broadcast_pay_price,
					data_broadcast_is_adult: info.broadcast_is_adult,
					data_broadcast_use_coin: info.broadcast_use_coin,
					data_broadcast_image: info.broadcast_image,
					data_broadcast_sequence: info.broadcast_sequence,
					data_broadcast_update_ip: info.broadcast_update_ip,
					data_broadcast_update_date: info.broadcast_update_date,
					data_broadcast_registration_ip: info.broadcast_registration_ip,
					data_broadcast_registration_date: info.broadcast_registration_date,
					data_community_user_profile_image: info.community_user_profile_image,
					data_user_nickname: info.user_nickname,
					data_broadcast_view_count: info.broadcast_view_count,
					data_broadcast_chat_id: info.broadcast_chat_id,
					data_broadcast_chat_lock: info.broadcast_chat_lock,
					data_streamcode_key_hls: info.streamcode_key_hls,
					data_streamcode_key_rtmp: info.streamcode_key_rtmp,
					data_streamcode_url_hls: info.streamcode_url_hls,
					data_streamcode_url_hds: info.streamcode_url_hds,
					data_streamcode_url_smooth: info.streamcode_url_smooth,
					data_streamcode_url_dash: info.streamcode_url_dash,
					data_twitch_id: info.twitch_id,
					data_twitch_play_url: info.twitch_play_url,
					data_youtube_id: info.youtube_id,
					data_youtube_play_url: info.youtube_play_url
				});
			}
		});
	}

	enrollmentBroadcast() {
		if(confirm("방송을 등록하시겠습니까?")) {
			console.log("POST::/private/v1/broadcast/", {
        community_id: this.state.input_community_id,
        user_id: this.state.input_user_id,
        broadcast_summary: this.state.input_broadcast_summary,
        broadcast_subject: this.state.input_broadcast_subject,
        broadcast_memo: this.state.input_broadcast_memo,
        broadcast_start_date: this.state.input_broadcast_start_date,
        broadcast_view_flag: this.state.input_broadcast_view_flag,
        broadcast_url: this.state.input_broadcast_url,
        broadcast_type: this.state.input_broadcast_type,
        broadcast_pay_flag: this.state.input_broadcast_pay_flag,
        broadcast_pay_price: this.state.input_broadcast_pay_price,
        broadcast_is_adult: this.state.input_broadcast_is_adult,
        broadcast_live: this.state.input_broadcast_live,
        broadcast_sequence: this.state.input_broadcast_sequence,
        broadcast_image: this.state.input_broadcast_image
      });
		}
	}

	deleteBroadcast() {
		if(confirm("방송을 삭제하시겠습니까?")) {
			jasync.delete({
				url: "/private/v1/broadcast/" + this.state.user_info,
				success: sss => {
					alert(sss.message);

          this.getUserData(this.state.user_info);
				}
			});
		}
	}

  modifyBroadcast() {
    if(confirm("방송을 수정하시겠습니까?")) {
    	let formData = new FormData();

      formData.append("broadcast_summary", this.state.input_broadcast_summary);
      formData.append("broadcast_subject", this.state.input_broadcast_subject);
      formData.append("broadcast_memo", this.state.input_broadcast_memo);
      formData.append("broadcast_start_date", this.state.input_broadcast_start_date);
      formData.append("broadcast_view_flag", this.state.input_broadcast_view_flag);
      formData.append("broadcast_live", this.state.input_broadcast_live);
      formData.append("broadcast_url", this.state.input_broadcast_url);
      formData.append("broadcast_type", this.state.input_broadcast_type);
      formData.append("broadcast_pay_flag", this.state.input_broadcast_pay_flag);
      formData.append("broadcast_pay_price", this.state.input_broadcast_pay_price);
      formData.append("broadcast_sequence", this.state.input_broadcast_sequence);
      formData.append("broadcast_is_adult", this.state.input_broadcast_is_adult);
      formData.append("broadcast_image", document.getElementById("input_broadcast_image").files[0]);

      jasync.multipart.post({
      	url: "/private/v1/broadcast/" + this.state.user_info,
				data: formData,
				success: sss => {
      		alert(sss.message);

      		this.setState({
      			editMode: false
					}, () => this.getUserData(this.state.user_info));
				}
			});
    }
  }

  modifyPartBroadcast() {
    if(confirm("방송을 수정하시겠습니까?")) {
      console.log("POST::/private/v1/broadcast/" + this.state.user_info + "/modify_individual", {
        broadcast_summary: this.state.input_broadcast_summary,
        broadcast_subject: this.state.input_broadcast_subject,
        broadcast_memo: this.state.input_broadcast_memo,
        broadcast_start_date: this.state.input_broadcast_start_date,
        broadcast_view_flag: this.state.input_broadcast_view_flag,
        broadcast_live: this.state.input_broadcast_live,
        broadcast_url: this.state.input_broadcast_url,
        broadcast_type: this.state.input_broadcast_type,
        broadcast_pay_flag: this.state.input_broadcast_pay_flag,
        broadcast_pay_price: this.state.input_broadcast_pay_price,
        broadcast_is_adult: this.state.input_broadcast_is_adult,
        broadcast_image: this.state.input_broadcast_image,
        broadcast_use_coin: this.state.input_broadcast_use_coin
      });
    }
  }

  previewBroadcast() {
    if(confirm("방송을 미리보기하시겠습니까?")) {
      jasync.get({
      	url: "/private/v1/broadcast/" + this.state.user_info + "/preview"
      });
    }
	}

	fixStreamcode() {
    if(confirm("사용자에게 방송코드를 고정하시겠습니까?")) {
      jasync.post({
      	url: "/private/v1/streamcode/" + this.state.data_user_id + "/fix",
				success: sss => alert(sss.message)
      });
    }
	}

	releaseStreamcode() {
    if(confirm("사용자에게 방송코드 고정을 해제하시겠습니까?")) {
      jasync.post({
      	url: "/private/v1/streamcode/" + this.state.data_user_id + "/fix_release",
				success: sss => alert(sss.message)
      });
    }
	}

  publishStreamcode() {
    if(confirm("방송코드를 발급하시겠습니까?")) {
      jasync.post({
      	url: "/private/v1/broadcast/" + this.state.user_info + "/publish_code",
				success: sss => alert(sss.message)
      });
    }
  }

  startBroadcast() {
    if(confirm("방송을 시작하시겠습니까?")) {
      jasync.post({
      	url: "/private/v1/broadcast/" + this.state.user_info + "/start",
				success: sss => alert(sss.message)
      });
    }
  }

  stopBroadcast() {
    if(confirm("방송을 종료하시겠습니까?")) {
      jasync.post({
      	url: "/private/v1/broadcast/" + this.state.user_info + "/stop",
				success: sss => alert(sss.message)
      });
    }
  }

  recoverBroadcast() {
    if(confirm("방송을 복구하시겠습니까?")) {
      jasync.post({
      	url: "/private/v1/broadcast/" + this.state.user_info + "/recover",
				success: sss => alert(sss.message)
      });
    }
  }




	render() {
		const Onair = (
			<div className="video-area">
				{/*
				<iframe
					style={{
						width: '100%',
						height: '500px'
					}}
					src={}
					frameBorder={0}
					allowFullScreen="allowFullScreen"
				>
				</iframe>*/}

			</div>
		);

		return (
			<section className="content">
				<PageHeader
					pageTitle={this.state.pageTitle}
					pageTitleName={this.state.pageTitleName}
					pageTitleNameSmall={this.state.pageTitleNameSmall}
				/>

				<div className="row">

					<div className="col-md-12">

						<div className="box box-warning">

							<div className="box-header with-border">
								<h3 className="box-title type-block">
									<b>
										방송
									</b>
									정보
								</h3>
							</div>
							<div className="box-body">
								{ this.state.data_broadcast_status == 1 ? Onair : '' }

								<div className="box-body">
									<div className="row">
										<div className="col-md-5">
											<div className="box box-primary">
												<div className="box-body">

													<ListBroad
														list={this.state.list}
														handleSelect={this.handleSelect}
													/>

												</div>
												<div className="box-footer">

													<Pagination
														limit={this.state.limit}
														total_page={this.state.list_Tpage}
														total_count={this.state.list_Tcount}
														list_page={this.state.list_page}
														handlePagination={this.handlePagination}
													/>

												</div>
											</div>
										</div>

										<div className="col-md-7">
											<div className="box box-success">

												<div className="box-body">

													<BroadToolContent
														data_broadcast_idx={this.state.data_broadcast_idx}
														data_community_id={this.state.data_community_id}
														data_user_id={this.state.data_user_id}
														data_broadcast_id={this.state.data_broadcast_id}
														data_broadcast_summary={this.state.data_broadcast_summary}
														data_broadcast_subject={this.state.data_broadcast_subject}
														data_broadcast_memo={this.state.data_broadcast_memo}
														data_broadcast_status={this.state.data_broadcast_status}
														data_broadcast_preview_status={this.state.data_broadcast_preview_status}
														data_broadcast_preview_time={this.state.data_broadcast_preview_time}
														data_broadcast_start_date={this.state.data_broadcast_start_date}
														data_broadcast_view_flag={this.state.data_broadcast_view_flag}
														data_broadcast_url={this.state.data_broadcast_url}
														data_broadcast_type={this.state.data_broadcast_type}
														data_broadcast_live={this.state.data_broadcast_live}
														data_broadcast_pay_flag={this.state.data_broadcast_pay_flag}
														data_broadcast_pay_price={this.state.data_broadcast_pay_price}
														data_broadcast_is_adult={this.state.data_broadcast_is_adult}
														data_broadcast_use_coin={this.state.data_broadcast_use_coin}
														data_broadcast_image={this.state.data_broadcast_image}
														data_broadcast_sequence={this.state.data_broadcast_sequence}
														data_broadcast_update_ip={this.state.data_broadcast_update_ip}
														data_broadcast_update_date={this.state.data_broadcast_update_date}
														data_broadcast_registration_ip={this.state.data_broadcast_registration_ip}
														data_broadcast_registration_date={this.state.data_broadcast_registration_date}
														data_community_user_profile_image={this.state.data_community_user_profile_image}
														data_user_nickname={this.state.data_user_nickname}
														data_broadcast_view_count={this.state.data_broadcast_view_count}
														data_broadcast_chat_id={this.state.data_broadcast_chat_id}
														data_broadcast_chat_lock={this.state.data_broadcast_chat_lock}
														data_streamcode_key_hls={this.state.data_streamcode_key_hls}
														data_streamcode_key_rtmp={this.state.data_streamcode_key_rtmp}
														data_streamcode_url_hls={this.state.data_streamcode_url_hls}
														data_streamcode_url_hds={this.state.data_streamcode_url_hds}
														data_streamcode_url_smooth={this.state.data_streamcode_url_smooth}
														data_streamcode_url_dash={this.state.data_streamcode_url_dash}
														data_twitch_id={this.state.data_twitch_id}
														data_twitch_play_url={this.state.data_twitch_play_url}
														data_youtube_id={this.state.data_youtube_id}
														data_youtube_play_url={this.state.data_youtube_play_url}

														handleChange={ this.handleChange }
														editMode={ this.state.editMode }
														toggleEdit={ this.toggleEdit }
														editUserData={ this.editUserData }

														enrollmentBroadcast={this.enrollmentBroadcast.bind(this)}
														deleteBroadcast={this.deleteBroadcast.bind(this)}
														modifyBroadcast={this.modifyBroadcast.bind(this)}
														modifyPartBroadcast={this.modifyPartBroadcast.bind(this)}
														previewBroadcast={this.previewBroadcast.bind(this)}
														fixStreamcode={this.fixStreamcode.bind(this)}
														releaseStreamcode={this.releaseStreamcode.bind(this)}
														publishStreamcode={this.publishStreamcode.bind(this)}
														startBroadcast={this.startBroadcast.bind(this)}
														stopBroadcast={this.stopBroadcast.bind(this)}
														recoverBroadcast={this.recoverBroadcast.bind(this)}


														input_community_id={this.state.input_community_id}
														input_user_id={this.state.input_user_id}
														input_broadcast_summary={this.state.input_broadcast_summary}
														input_broadcast_subject={this.state.input_broadcast_subject}
														input_broadcast_memo={this.state.input_broadcast_memo}
														input_broadcast_start_date={this.state.input_broadcast_start_date}
														input_broadcast_view_flag={this.state.input_broadcast_view_flag}
														input_broadcast_url={this.state.input_broadcast_url}
														input_broadcast_type={this.state.input_broadcast_type}
														input_broadcast_pay_flag={this.state.input_broadcast_pay_flag}
														input_broadcast_pay_price={this.state.input_broadcast_pay_price}
														input_broadcast_is_adult={this.state.input_broadcast_is_adult}
														input_broadcast_live={this.state.input_broadcast_live}
														input_broadcast_sequence={this.state.input_broadcast_sequence}
														input_broadcast_image={this.state.input_broadcast_image}
														input_broadcast_use_coin={this.state.input_broadcast_use_coin}
													/>

												</div>
											</div>
										</div>

									</div>


								</div>
							</div>
						</div>
					</div>
				</div>

			</section>
		)
	}
}


export default BroadTool;



