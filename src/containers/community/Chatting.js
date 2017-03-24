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
		this.state = {
			pageTitle: "채팅방 관리",
			pageTitleName: "채팅방",
			pageTitleNameSmall: "관리",
			currentChattingItem: null,

			community: '',
			channel_index: 9,
			channel_id: '',

			search_key: 'community_id',
			search_value: '',

			limit: 10,
			list_page: 1,
			list_Tcount: '',
			list_Tpage: '',

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
			this.getUserList();
			console.log(this.state.channel_id);
		});
	}

	handleSelect(user_id) {
		this.setState({
			user_info: user_id
		}, () => {
			this.getUserData(user_id);
		});
	}

	handlePagination(index) {
		this.setState({
			list_page: index
		}, () => {
			this.getUserList();
		});
	}


	chatManager(chat_id, user_id) {
		if (confirm("해당 사용자를 채팅방의 운영자로 지정하시겠습니까?")) {
			jasync.post({
				url: "/private/v1/chat/chat_manager/" + chat_id + "/" + user_id,
				success: data => {
					this.setState({
						community: data.community,
						channel_id: data.community[0].community_id
					}, () => this.getUserList());
				}
			});
		}
	}

	chatUnmanager(chat_id, user_id) {
		if (confirm("해당 사용자를 채팅방의 운영자 권한을 회수하시겠습니까?")) {
			jasync.post({
				url: "/private/v1/chat/chat_unmanager/" + chat_id + "/" + user_id,
				success: data => {
					this.setState({
						community: data.community,
						channel_id: data.community[0].community_id
					}, () => this.getUserList());
				}
			});
		}
	}


	chatSilence(chat_id, user_id) {
		if (confirm("해당 사용자를 채팅방에서 침묵시키시겠습니까?")) {
			jasync.post({
				url: "/private/v1/chat/chat_silence/" + chat_id + "/" + user_id,
				success: data => {
					this.setState({
						community: data.community,
						channel_id: data.community[0].community_id
					}, () => this.getUserList());
				}
			});
		}
	}

	chatUnsilence(chat_id, user_id) {
		if (confirm("해당 사용자의 채팅방 침묵을 해제시키시겠습니까?")) {
			jasync.post({
				url: "/private/v1/chat/chat_unsilence/" + chat_id + "/" + user_id,
				success: data => {
					this.setState({
						community: data.community,
						channel_id: data.community[0].community_id
					}, () => this.getUserList());
				}
			});
		}
	}

	userOut(chat_id, user_id) {
		if (confirm("해당 사용자를 채팅방에서 강퇴시키시겠습니까?")) {
			jasync.delete({
				url: "/private/v1/chat/user_out/" + chat_id + "/" + user_id,
				success: data => {
					this.setState({
						community: data.community,
						channel_id: data.community[0].community_id
					}, () => this.getUserList());
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
				}, () => this.getUserList());
			}
		});
	}


	getUserList() {
		jasync.get({
			url: "/private/v1/chat",
			data: {
				page: this.state.list_page,
				limit: this.state.limit,
				'search_type[]': this.state.search_key,
				'search_value[]': this.state.search_value
			},
			success: data => {
				this.setState({
					list: data.rooms,

					list_Tcount: data.total_count,
					list_Tpage: data.total_page,
					list_page: +data.page,

					total_count: data.total_count,
					room_info: data.rooms[0].broadcast_chat_id,
					data: data.rooms[0]
				}, () => {
					this.getUserData(data.rooms[0].broadcast_chat_id);
				});
			}
		});
	}

	getUserData(user_id) {
		jasync.get({
			url: "/private/v1/chat",
			data: {
				page: this.state.list_page,
				limit: this.state.limit,
				'search_type[]': 'broadcast_chat_id',
				'search_value[]': user_id
			},
			success: data => {
				this.setState({
					data: data.rooms[0],
					data_broadcast_chat_id: data.rooms[0].broadcast_chat_id,
					data_broadcast_idx: data.rooms[0].broadcast_idx,
					data_community_id: data.rooms[0].community_id,
					data_broadcast_chat_name: data.rooms[0].broadcast_chat_name,
					data_broadcast_chat_site: data.rooms[0].broadcast_chat_site,
					data_broadcast_chat_lock: data.rooms[0].broadcast_chat_lock,
					data_broadcast_chat_notice: data.rooms[0].broadcast_chat_notice,
					data_broadcast_chat_registration_date: data.rooms[0].broadcast_chat_registration_date,
					data_broadcast_chat_virtual_count: data.rooms[0].broadcast_chat_virtual_count,
					data_user_id: data.rooms[0].user_id,
					data_user_nickname: data.rooms[0].user_nickname

				}, () => {
					this.getJoinUserData(data.rooms[0].broadcast_chat_id);
				});
			}
		});
	}

	getJoinUserData(chat_id) {
		jasync.get({
			url: "/private/v1/chat/user_list/" + chat_id,
			success: data => {
				this.setState({
					join_users: data.users,

				}, () => {
					// console.log(`@@@@@@ ${JSON.stringify(this.state.join_users, null, 2)}`)
					// this.getUserData(data.rooms[0].broadcast_chat_id);
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
									<input type="text" className="form-control"/>
									<span className="input-group-btn">
                      <button type="button" className="btn btn-primary btn-flat">검색</button>
                    </span>
								</div>

								<ListBoard
									list={this.state.list}
									handleSelect={this.handleSelect}
								/>

							</div>
							<div className="box-footer">

								<Pagination
									pagination={this.state.pagination}
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
								data_user_id={this.state.data_user_id}
								data_user_nickname={this.state.data_user_nickname}
							/>

						</div>
						<div className="col-lg-6">

							<ChattingContentUsers
								list={this.state.join_users}

							/>


						</div>
					</div>
				</div>
			</section>
		)
	}
}


class ChattingItemInfo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let info = this._reactInternalInstance._currentElement._owner._instance.state.currentChattingItem;

		return (
			<div className="box box-success">
				<div className="box-header with-border">
					<h3 className="box-title"><b>{info ? info.broadcast_chat_name : ""}</b>의 방정보</h3>
				</div>
				<div className="box-body border-style">
					<form className="form-horizontal">
						<div className="form-group">
							<label className="control-label col-xs-4" htmlFor="grade">채팅방 번호:</label>
							<div className="col-xs-8">
								<label className="control-label">
									{info ? info.broadcast_idx : ""}
								</label>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-xs-4" htmlFor="grade">채팅방 이름:</label>
							<div className="col-xs-8">

								<div className="input-group input-group-sm">
									<label className="control-label">
										{info ? info.broadcast_chat_name : ""}
									</label>
									<span className="input-group-btn">
													<button type="button" className="btn btn-warning btn-flat">수정</button>
											</span>
								</div>
							</div>

						</div>
						<div className="form-group">
							<label className="control-label col-xs-4" for="grade">채팅방 사이트:</label>
							<div className="col-xs-8">
								<label className="control-label">
									{info ? info.broadcast_chat_site : ""}
								</label>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-xs-4" for="id">채팅방 상태:</label>
							<div className="col-xs-8">

								<div className="input-group input-group-sm">
									<label className="control-label">
										1{/* TODO */}
									</label>
									<span className="input-group-btn">
													<button type="button" className="btn btn-warning btn-flat">수정</button>
												</span>
								</div>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-xs-4" for="id">채팅방 생성일:</label>
							<div className="col-xs-8">
								<label className="control-label">
									{info ? info.broadcast_chat_registration_date : ""}
								</label>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-xs-4" for="id">채팅방 가상인원:</label>
							<div className="col-xs-8">

								<div className="input-group input-group-sm">
									<label className="control-label">
										{info ? info.broadcast_virtual_count : ""}
									</label>
									<span className="input-group-btn">
													<button type="button" className="btn btn-warning btn-flat">수정</button>
												</span>
								</div>

							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-xs-4" for="name">채팅방 공지:</label>
							<div className="col-xs-8">
								<label className="control-label">
									false
								</label>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-xs-4" for="nick">채팅방 채널:</label>
							<div className="col-xs-8">
								<label className="control-label">
									{info ? info.community_id : ""}
								</label>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-xs-4" for="grade">채팅방 주인장:</label>
							<div className="col-xs-8">
								<label className="control-label">
									{info ? info.user_nickname : ""}
								</label>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-xs-4" for="email">채팅방 매니져:</label>
							<div className="col-xs-8">

								<div className="input-group input-group-sm">
									<input type="text" className="form-control" placeholder="등록할 매니저 아이디"/>
									<span className="input-group-btn">
													<button type="button" className="btn btn-primary btn-flat">등록</button>
												</span>
								</div>
								<hr/>
								<button className="btn btn-default">홍길동 <span className="badge">해제</span></button>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-xs-4" for="email">채팅방 차단:</label>
							<div className="col-xs-8">

								<div className="input-group input-group-sm">
									<input type="text" className="form-control" placeholder="차단시킬 유저 아이디"/>
									<span className="input-group-btn">
													<button type="button" className="btn btn-primary btn-flat">등록</button>
												</span>
								</div>
								<hr/>
								<button className="btn btn-default">홍길동 <span className="badge">해제</span></button>
								<button className="btn btn-default">홍당무 <span className="badge">해제</span></button>
								<button className="btn btn-default">홍진경 <span className="badge">해제</span></button>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-xs-4" for="nick">채팅방 침묵:</label>
							<div className="col-xs-8">

								<div className="input-group input-group-sm">
									<input type="text" className="form-control" placeholder="침묵시킬 유저 아이디"/>
									<span className="input-group-btn">
													<button type="button" className="btn btn-primary btn-flat">등록</button>
												</span>
								</div>
								<hr/>
								<button className="btn btn-default">홍길동 <span className="badge">해제</span></button>
								<button className="btn btn-default">홍당무 <span className="badge">해제</span></button>
							</div>
						</div>
						<hr/>
						<div className="form-group">
							<label className="control-label col-xs-4" for="nick">사용자 전체 강퇴:</label>
							<div className="col-xs-8">
								<button className="btn btn-danger">전체 강퇴</button>
							</div>
						</div>
					</form>

				</div>

			</div>
		);
	}
}

class ChattingItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			room: props.room,
			owner: props.owner
		};
	}

	render() {
		return (
			<li
				className={"list-item-1 has-right" + ((this.state.room === this.state.owner.state.currentChattingItem) ? " active" : "")}
				onClick={() => this.state.owner.setState({currentChattingItem: this.state.room})}>
				<Link to="#">
					<span className="title">
						{this.state.room.broadcast_chat_name}
					</span>
					<span className="right">
						{this.state.room.user_nickname}
					</span>
				</Link>
			</li>
		);
	}
}

class ChattingItemList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			chattingItemList: "",
			owner: props.owner
		}
	}

	componentDidMount() {
		this.getChattingItem();
	}

	getChattingItem(page) {
		let that = this;
		let chattingItemList = [];

		jj.get({
			url: "/private/v1/chat",
			data: {
				page: page || 1
			},
			success: data => {
				data.rooms.map((room, i) => {
					chattingItemList.push(<ChattingItem key={room.broadcast_chat_id} room={room} owner={this.state.owner}/>);
					if (i === 0) that._reactInternalInstance._currentElement._owner._instance.setState({currentChattingItem: room});
				});
				that.setState({chattingItemList: chattingItemList});
			}
		});
	}

	render() {
		return (
			<div className="box box-primary">
				<div className="box-header with-border">


				</div>
				<div className="box-body">

					<div className="input-group input-group-sm">
						<input type="text" className="form-control"/>
						<span className="input-group-btn">
                      <button type="button" className="btn btn-primary btn-flat">검색</button>
                    </span>
					</div>
					<ul className="nav nav-stacked">
						{this.state.chattingItemList}
					</ul>

				</div>
				<div className="box-footer">
					<ul className="pagination">
						{/* TODO 페이지네이션*/}
						<li onClick={this.getChattingItem.bind(this, 1)}><Link to="#">1</Link></li>
						<li onClick={this.getChattingItem.bind(this, 2)}><Link to="#">2</Link></li>
					</ul>
				</div>
			</div>
		);
	}
}


class ChattingItemUserItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li className="list-item-1 has-right">
				<a href="#">
					<span className="title">
						마젠다다
					</span>
					<span className="text">
						juni84_97729584
					</span>
					<span className="right">
						<button className="btn btn-primary">복사</button>
					</span>
				</a>
			</li>
		);
	}
}

class ChattingItemUserList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			chattingItemUserItem: ""
		};
	}

	componentDidMount() {
		this.getChattingItemUserItem();
	}

	getChattingItemUserItem(page) {
		let chattingItemUserItem = [];

		chattingItemUserItem.push(<ChattingItemUserItem key="1"/>);
		chattingItemUserItem.push(<ChattingItemUserItem key="2"/>);
		chattingItemUserItem.push(<ChattingItemUserItem key="3"/>);

		this.setState({chattingItemUserItem: chattingItemUserItem});
	}

	render() {
		return (
			<div className="box box-danger">
				<div className="box-header with-border">

					<h3 className="box-title"><b>채팅방</b>참여자 리스트</h3>

				</div>
				<div className="box-body">

					<ul className="nav nav-stacked">
						{this.state.chattingItemUserItem}
					</ul>
				</div>

				<div className="box-footer">
					<ul className="pagination">
						<li><a href="#">1</a></li>
						<li className="active"><a href="#">2</a></li>
						<li><a href="#">3</a></li>
						<li><a href="#">4</a></li>
						<li><a href="#">5</a></li>
					</ul>
				</div>


			</div>
		);
	}
}


export default Chatting;