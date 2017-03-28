import React, {Component} from 'react';
import PageHeader from '../../components/PageHeader';
import {Router, Route, Switch, Link} from 'react-router-dom';
import jj from '../../jasync';
import jasync from '../../jasync';
import {
	BoxTitle,
	ChannelNav,
	ChannelNavAll,
	TypeNav,
	Button, Label,
	Input, InputGroup, InputGroupBtn,
	ListDefault,
	ListBoard,
	Pagination
} from '../../components/part/';
import ChattingContent from './ChattingContent';
import ChattingContentUsers from './ChattingContentUsers';


class Chatting extends Component {
	constructor(props) {
		super(props);

		this.inc = {
			number: 0
		};

		this.state = {
			pageTitle: "채팅방 관리",
			pageTitleName: "채팅방",
			pageTitleNameSmall: "관리",

			community: '',
			channel_index: 9,
			channel_id: '',

			search_key: 'community_id',
			search_value: '',

      join_users: "",
      join_managers: "",
      silence_users: "",

			list: "",
			data: "",
			room_info: "",
			limit: 10,
			list_page: 1,
			list_Tcount: '',
			list_Tpage: '',

			virtual_count_edit_mode: false,

			user_list: "",
      user_limit: 10,
      user_list_page: 1,
      user_list_Tcount: '',
      user_list_Tpage: '',

      data_broadcast_chat_id: "",
      data_broadcast_idx: "",
      data_community_id: "",
      data_broadcast_chat_name: "",
      data_broadcast_chat_site: "",
      data_broadcast_chat_lock: "",
      data_broadcast_chat_notice: "",
      data_broadcast_chat_registration_date: "",
      data_broadcast_chat_virtual_count: "",
      input_broadcast_chat_virtual_count: "",
      data_user_id: "",
      data_user_nickname: "",
		}
		
		this.handleChannel = this.handleChannel.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.handlePagination = this.handlePagination.bind(this);
	}
	
	handleChannel(index, id) {
		this.setState({
			channel_index: index,
			search_key: 'community_id',
			search_value: id,
			list_page: 1,
		}, () => {
			this.getChattingList();
			console.log(this.state.channel_id);
		});
	}

	handleSelect(user_id) {
		this.setState({
			user_info: user_id
		}, () => {
			this.getChattingData(user_id);
		});
	}

	handlePagination(index) {
		this.setState({
			list_page: index
		}, () => {
			this.getChattingList();
		});
	}
	
	handleUserPagination(index) {
    this.setState({
      user_list_page: index
    }, () => {
      this.getUserList();
    });
	}

	handleSearchValue(e) {
		this.setState({search_value: e.target.value});
	}

	handleVirtualCountChange(e) {
		this.setState({input_broadcast_chat_virtual_count: e.target.value});
	}

	handleVirtualCount() {
		jasync.post({
			url: "/private/v1/chat/chat_virtualuser/" + this.state.room_info + "/" + this.state.input_broadcast_chat_virtual_count,
			success: sss => {
				if(sss.result === "ok") {
					alert("가상인원이 설정되었습니다.");

					this.setState({
            data_broadcast_chat_virtual_count: this.state.input_broadcast_chat_virtual_count
					});
					this.handleToggleEditState();
				}
			}
		});
	}

	handleToggleEditState() {
    this.setState({
    	virtual_count_edit_mode: !this.state.virtual_count_edit_mode,
      input_broadcast_chat_virtual_count: this.state.virtual_count_edit_mode ? this.state.data_broadcast_chat_virtual_count : this.state.input_broadcast_chat_virtual_count
    });
	}

	chatManager(chat_id, user_id) {
		if (confirm("해당 사용자를 채팅방의 운영자로 지정하시겠습니까?")) {
			jasync.post({
				url: "/private/v1/chat/chat_manager/" + chat_id + "/" + user_id,
				success: data => {
          this.getChattingData(this.state.room_info);
				}
			});
		}
	}

	chatUnmanager(chat_id, user_id) {
		if (confirm("해당 사용자를 채팅방의 운영자 권한을 회수하시겠습니까?")) {
			jasync.post({
				url: "/private/v1/chat/chat_unmanager/" + chat_id + "/" + user_id,
				success: data => {
          this.getChattingData(this.state.room_info);
				}
			});
		}
	}


	chatSilence(chat_id, user_id) {
		if (confirm("해당 사용자를 채팅방에서 침묵시키시겠습니까?")) {
			jasync.post({
				url: "/private/v1/chat/chat_silence/" + chat_id + "/" + user_id,
				success: data => {
          this.getChattingData(this.state.room_info);
				}
			});
		}
	}

	chatUnsilence(chat_id, user_id) {
		if (confirm("해당 사용자의 채팅방 침묵을 해제시키시겠습니까?")) {
			jasync.post({
				url: "/private/v1/chat/chat_unsilence/" + chat_id + "/" + user_id,
				success: data => {
          this.getChattingData(this.state.room_info);
				}
			});
		}
	}

	userOut(chat_id, user_id) {
		if (confirm("해당 사용자를 채팅방에서 강퇴시키시겠습니까?")) {
			jasync.delete({
				url: "/private/v1/chat/user_out/" + chat_id + "/" + user_id,
				success: data => {
					alert(data.message);
          this.getChattingData(this.state.room_info);
				}
			});
		}
	}

	getChannelList() {
		jasync.get({
			url: "/private/v1/community",
			success: data => {
				this.setState({
					community: data.community,
					channel_id: data.community[0].community_id
				}, () => this.getChattingList());
			}
		});
	}

	getChattingList() {
		let data = this.state.search_value ? {
      page: isNaN(this.state.list_page) ? 1 : this.state.list_page,
      limit: this.state.limit,
      'search_type[]': this.state.search_key,
      'search_value[]': this.state.search_value
    } : {
        page: isNaN(this.state.list_page) ? 1 : this.state.list_page,
        limit: this.state.limit,
		};

		jasync.get({
			url: "/private/v1/chat",
			data: data,
			success: data => {
				if(data.rooms) {
          this.setState({
            list: data.rooms,

            list_Tcount: data.total_count,
            list_Tpage: data.total_page,
            list_page: +data.page,

            total_count: data.total_count,
            room_info: data.rooms[0].broadcast_chat_id,
            data: data.rooms[0]
          }, () => {
            this.getChattingData(data.rooms[0].broadcast_chat_id);
          });
				} else {
          this.setState({
            list: data.rooms,

            list_Tcount: data.total_count,
            list_Tpage: data.total_page,
            list_page: +data.page,

            total_count: data.total_count
          });
				}
			}
		});
	}

  getChattingData(broadcast_chat_id) {
		jasync.get({
			url: "/private/v1/chat",
			data: {
				page: 1,
				limit: this.state.limit,
				'search_type[]': 'broadcast_chat_id',
				'search_value[]': broadcast_chat_id
			},
			success: data => {
				if(data.rooms) {
          this.setState({
            data: data.rooms[0],
            room_info: data.rooms[0].broadcast_chat_id,
            data_broadcast_chat_id: data.rooms[0].broadcast_chat_id,
            data_broadcast_idx: data.rooms[0].broadcast_idx,
            data_community_id: data.rooms[0].community_id,
            data_broadcast_chat_name: data.rooms[0].broadcast_chat_name,
            data_broadcast_chat_site: data.rooms[0].broadcast_chat_site,
            data_broadcast_chat_lock: data.rooms[0].broadcast_chat_lock,
            data_broadcast_chat_notice: data.rooms[0].broadcast_chat_notice,
            data_broadcast_chat_registration_date: data.rooms[0].broadcast_chat_registration_date,
            data_broadcast_chat_virtual_count: data.rooms[0].broadcast_chat_virtual_count,
            input_broadcast_chat_virtual_count: data.rooms[0].broadcast_chat_virtual_count,
            data_user_id: data.rooms[0].user_id,
            data_user_nickname: data.rooms[0].user_nickname
          }, () => {
            this.getJoinUserData(data.rooms[0].broadcast_chat_id);
            this.getSilenceUserData(data.rooms[0].broadcast_chat_id);
          });
				}
			}
		});
	}

	getJoinUserData(chat_id) {
		jasync.get({
			url: "/private/v1/chat/user_list/" + chat_id,
			success: data => {
				this.setState({
					join_users: data.users,
          user_list_Tpage: "",
          user_total_count: "",
          user_list_page: "",
          join_managers: data.users.filter(user => user.user_manager === 1)
				}, () => {
					// console.log(`@@@@@@ ${JSON.stringify(this.state.join_users, null, 2)}`)
					// this.getChattingList(data.rooms[0].broadcast_chat_id);
				});
			}
		});
	}


  getSilenceUserData(chat_id) {
    jasync.get({
      url: "/private/v1/chat/silence_list/" + chat_id,
      success: data => {
        this.setState({
          silence_users: data.users,
        }, () => {
          // console.log(`@@@@@@ ${JSON.stringify(this.state.join_users, null, 2)}`)
          // this.getChattingList(data.rooms[0].broadcast_chat_id);
        });
      }
    });
  }

	componentWillMount() {

	}

	componentDidMount() {
		this.getChannelList();
	}

	componentDidUpdate() {

	}

	render() {
		return (
			<section className="content">
				<PageHeader
					pageTitle={this.state.pageTitle}
					pageTitleName={this.state.pageTitleName}
					pageTitleNameSmall={this.state.pageTitleNameSmall}
				/>
				<div className="row">
					<div className="col-md-12">
						<div className="box box-info">
							<div className="box-header">
								<ChannelNavAll
									community={this.state.community}
									channel_index={this.state.channel_index}
									handleChannel={this.handleChannel}
								/>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="box box-primary">
							<div className="box-header with-border">
							</div>
							<div className="box-body">

								<div className="input-group input-group-sm">
									<input type="text" className="form-control" onChange={this.handleSearchValue.bind(this)}/>
									<span className="input-group-btn">
                      <button type="button" className="btn btn-primary btn-flat" onClick={this.getChattingList.bind(this)}>검색</button>
                    </span>
								</div>
								<ListBoard
									inc={this.inc}
									list={this.state.list}
									handleSelect={this.handleSelect}
								/>
							</div>
							<div className="box-footer">
								<Pagination
									total_page={this.state.list_Tpage}
									total_count={this.state.list_Tcount}
									list_page={this.state.list_page}
									handlePagination={this.handlePagination}
								/>
							</div>
						</div>
					</div>
					<div className="col-md-8">
						<div className="col-lg-6">
							<ChattingContent
								data_broadcast_chat_id={this.state.data_broadcast_chat_id}
								data_broadcast_idx={this.state.data_broadcast_idx}
								data_community_id={this.state.data_community_id}
								data_broadcast_chat_name={this.state.data_broadcast_chat_name}
								data_broadcast_chat_site={this.state.data_broadcast_chat_site}
								data_broadcast_chat_lock={this.state.data_broadcast_chat_lock}
								data_broadcast_chat_notice={this.state.data_broadcast_chat_notice}
								data_broadcast_chat_registration_date={this.state.data_broadcast_chat_registration_date}
								data_broadcast_chat_virtual_count={this.state.data_broadcast_chat_virtual_count}
								input_broadcast_chat_virtual_count={this.state.input_broadcast_chat_virtual_count}
								data_user_id={this.state.data_user_id}
								data_user_nickname={this.state.data_user_nickname}
								data_join_managers={this.state.join_managers}
								data_silence_users={this.state.silence_users}
								virtual_count_edit_mode={this.state.virtual_count_edit_mode}
								handleVirtualCount={this.handleVirtualCount.bind(this)}
								handleVirtualCountChange={this.handleVirtualCountChange.bind(this)}
								handleToggleEditState={this.handleToggleEditState.bind(this)}
								handleUnmanager={this.chatUnmanager.bind(this)}
								handleUnsilence={this.chatUnsilence.bind(this)}
							/>
						</div>
						<div className="col-lg-6">
							<ChattingContentUsers
								list={this.state.join_users}
								data_broadcast_idx={this.state.data_broadcast_idx}
								data_broadcast_chat_id={this.state.data_broadcast_chat_id}
								handleManager={this.chatManager.bind(this)}
								handleSilence={this.chatSilence.bind(this)}
								handleOut={this.userOut.bind(this)}
								handleUnmanager={this.chatUnmanager.bind(this)}
								handleUnsilence={this.chatUnsilence.bind(this)}
							/>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Chatting;