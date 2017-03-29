import React from 'react';
import jasync from '../../jasync';
import PageHeader from '../../components/PageHeader';
import {
	BoxTitle,
	Button, Label,
	Input, InputGroup, InputGroupBtn,
	ListStreamUse,
	ListStream,
	Pagination
} from '../../components/part/';
import BroadCodeContent from './BroadCodeContent'


class BroadCode extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "방송코드관리",
			pageTitleName: "방송코드",
			pageTitleNameSmall: "관리",
			board: '',
			keyword: '',
			keyword_option: 'user_name',
			search_keyword: '',
			editMode: false,
			editNew: false,

			limit: 10,
			list: '',
			list_Tcount: '',
			list_Tpage: '',
			list_page: 1,

			data: '',
			user_info: '',

      input_streamcode_id: "",
      input_streamcode_status: "",
      input_streamcode_url: "",
      input_streamcode_key: "",
      input_streamcode_password: ""


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

		console.log(this.state[e.target.name]);
	}

	toggleEdit() {
		this.setState({
			editMode: !this.state.editMode,
      input_streamcode_id: this.state.data_streamcode_id,
      input_streamcode_status: this.state.data_streamcode_status,
      input_streamcode_url: this.state.data_streamcode_url,
      input_streamcode_key: this.state.data_streamcode_key,
      input_streamcode_password: this.state.data_streamcode_password
		});
	}

  confirmEdit() {
		if(this.state.editNew) {
			this.enrollmentNewStreamcode();
		} else {
			this.modifyStreamcode();
		}
	}

	cancelEdit() {
    this.setState({
      editMode: false,
      editNew: false
    });
	}

	toggleNew() {
		this.setState({
      editMode: !this.state.editMode,
      editNew: !this.state.editNew,
      input_streamcode_id: "",
      input_streamcode_status: "",
      input_streamcode_url: "",
      input_streamcode_key: "",
      input_streamcode_password: ""
		});
	}

	handleSelect(user_id, user) {
		this.setState({
			user_info: user_id
		}, () => {
			this.getUserData(this.state.user_info, user);
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
		this.getUserListUse();

	}

	componentDidUpdate() {

	}


	// List viewer
	getUserList() {
		jasync.get({
			url: "/private/v1/streamcode/",
			data: {
				page: this.state.list_page,
				limit: this.state.limit
			},
			success: data => {
				this.setState({
					list: data.streamcode,

					list_Tcount: +data.total_count,
					list_Tpage: +data.total_page,
					list_page: +data.page,

					total_count: data.total_count,
					user_info: data.streamcode[0].streamcode_idx
				});
				this.getUserData(this.state.user_info);
			}
		});
	}

	// List viewer
	getUserListUse() {
		jasync.get({
			url: "/private/v1/streamcode/use_list",
			success: data => {
				console.log(JSON.stringify(data.streamcode, null, 2));
				this.setState({
					list_use: data.streamcode,
				});
			}
		});
	}

	// Content viewer
	getUserData(streamcode_idx, user_id) {
		jasync.get({
			url: "/private/v1/streamcode/" + streamcode_idx,
			success: data => {
				let info = data.streamcode;
				let use = data.streamcode_use;
				this.setState({

					data_streamcode_idx: info.streamcode_idx,
					data_streamcode_id: info.streamcode_id,
					data_streamcode_url: info.streamcode_url,
					data_streamcode_key: info.streamcode_key,
					data_streamcode_password: info.streamcode_password,
					data_streamcode_status: info.streamcode_status,
					data_streamcode_registration_date: info.streamcode_registration_date,
					data_streamcode_use_idx: use.streamcode_use_idx,
					data_broadcast_idx: use.broadcast_idx,
					data_streamcode_use_registration_date: use.streamcode_use_registration_date,
					data_user_id: user_id
				});
			}
		});
	}

	enrollmentNewStreamcode() {
		if(confirm("새로운 방송코드로 등록하시겠습니까?")) {
			jasync.post({
				url: "/private/v1/streamcode/",
				data: {
          streamcode_id: this.state.input_streamcode_id,
          streamcode_status: this.state.input_streamcode_status,
          streamcode_url: this.state.input_streamcode_url,
          streamcode_key: this.state.input_streamcode_key,
          streamcode_password: this.state.input_streamcode_password
        },
				success: sss => {
					alert(sss.message);

          this.setState({
            editMode: false,
            editNew: false
          }, () => this.getUserList());
				}
			});
		}
	}

  deleteStreamcode() {
    if(confirm("방송코드를 삭제하시겠습니까?")) {
    	jasync.delete({
    		url: "/private/v1/streamcode/" + this.state.user_info,
				success: sss => {
    			alert(sss.message);

    			this.getUserList();
        }
			});
    }
  }

  modifyStreamcode() {
    if(confirm("방송코드를 수정하시겠습니까?")) {
    	jasync.post({
    		url: "/private/v1/streamcode/" + this.state.user_info + "/modify",
				data: {
          streamcode_id: this.state.input_streamcode_id,
          streamcode_status: this.state.input_streamcode_status,
          streamcode_url: this.state.input_streamcode_url,
          streamcode_key: this.state.input_streamcode_key,
          streamcode_password: this.state.input_streamcode_password
        },
				success: sss => {
    			alert(sss.message);

    			this.setState({
    				editMode: false,
						editNew: false
					}, () => this.getUserList());
				}
			});
    }
  }

  releaseStreamcode(user_id) {
    if(confirm("사용자에게 방송코드 고정을 해제하시겠습니까?")) {
      jasync.post({
        url: "/private/v1/streamcode/" + user_id + "/fix_release",
        success: sss => {
        	alert(sss.message);

          this.getUserList();
        }
      });
    }
  }


  render() {
		const Onair = (
			<div className="video-area">
				<div className="video"></div>
				<div className="chatting"></div>
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
								{
									this.state.editMode ?
										"" : (
											<button type="button"
															className="btn btn-success"
															onClick={ this.toggleNew.bind(this) }
											>추가
											</button>
										)
								}
							</div>
							<div className="box-body">

								<div className="box-body">
									<div className="row">
										<div className="col-md-5">
											<div className="box box-primary">
												<div className="box-body">

													<ListStream
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

											<div className="box box-primary">

												<div className="box-header with-border">
													<h3 className="box-title type-block">
														<b>
															사용중인 방송
														</b>
														리스트
													</h3>
												</div>

												<div className="box-body">
													<ListStreamUse
														list={this.state.list_use}
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

													<BroadCodeContent

														data_streamcode_idx={this.state.data_streamcode_idx}
														data_streamcode_id={this.state.data_streamcode_id}
														data_streamcode_url={this.state.data_streamcode_url}
														data_streamcode_key={this.state.data_streamcode_key}
														data_streamcode_password={this.state.data_streamcode_password}
														data_streamcode_status={this.state.data_streamcode_status}
														data_streamcode_registration_date={this.state.data_streamcode_registration_date}
														data_streamcode_use_idx={this.state.data_streamcode_use_idx}
														data_broadcast_idx={this.state.data_broadcast_idx}
														data_streamcode_use_registration_date={this.state.data_streamcode_use_registration_date}
														data_user_id={this.state.data_user_id}

														input_streamcode_id={this.state.input_streamcode_id}
														input_streamcode_status={this.state.input_streamcode_status}
														input_streamcode_url={this.state.input_streamcode_url}
														input_streamcode_key={this.state.input_streamcode_key}
														input_streamcode_password={this.state.input_streamcode_password}

														enrollmentNewStreamcode={this.enrollmentNewStreamcode.bind(this)}
														deleteStreamcode={this.deleteStreamcode.bind(this)}
														modifyStreamcode={this.modifyStreamcode.bind(this)}
														releaseStreamcode={this.releaseStreamcode.bind(this)}

														handleChange={ this.handleChange }
														editMode={ this.state.editMode }
														editNew={ this.state.editNew }
														toggleEdit={ this.toggleEdit }
														confirmEdit={this.confirmEdit.bind(this)}
														cancelEdit={this.cancelEdit.bind(this)}
														editUserData={ this.editUserData }
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


export default BroadCode;



