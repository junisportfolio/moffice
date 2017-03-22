import React, { Component } from 'react';
import PageHeader from '../../components/PageHeader';
import {Router, Route, Switch, Link} from 'react-router-dom';
import jj from '../../jasync';

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

    chattingItemUserItem.push(<ChattingItemUserItem key="1" />);
    chattingItemUserItem.push(<ChattingItemUserItem key="2" />);
    chattingItemUserItem.push(<ChattingItemUserItem key="3" />);

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

class ChattingItemInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	let info = this._reactInternalInstance._currentElement._owner._instance.state.currentChattingItem;

    return (
			<div className="box box-success">
				<div className="box-header with-border">
					<h3 className="box-title"><b>{info? info.broadcast_chat_name : ""}</b>의 방정보</h3>
				</div>
				<div className="box-body border-style">
					<form className="form-horizontal">
						<div className="form-group">
							<label className="control-label col-xs-4" htmlFor="grade">채팅방 번호:</label>
							<div className="col-xs-8">
								<label className="control-label">
                  {info? info.broadcast_idx : ""}
								</label>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-xs-4" htmlFor="grade">채팅방 이름:</label>
							<div className="col-xs-8">

								<div className="input-group input-group-sm">
									<label className="control-label">
                    {info? info.broadcast_chat_name : ""}
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
                  {info? info.broadcast_chat_site : ""}
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
							<label className="control-label col-xs-4" for="id">채팅방 생성:</label>
							<div className="col-xs-8">
								<label className="control-label">
                  {info? info.broadcast_chat_registration_date : ""}
								</label>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-xs-4" for="id">채팅방 가상인원:</label>
							<div className="col-xs-8">

								<div className="input-group input-group-sm">
									<label className="control-label">
                    {info? info.broadcast_virtual_count : ""}
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
                  {info? info.community_id : ""}
								</label>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-xs-4" for="grade">채팅방 주인장:</label>
							<div className="col-xs-8">
								<label className="control-label">
                  {info? info.user_nickname : ""}
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
			<li className={"list-item-1 has-right" + ((this.state.room === this.state.owner.state.currentChattingItem) ? " active" : "")} onClick={() => this.state.owner.setState({currentChattingItem: this.state.room})}>
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

  getChattingItem (page) {
    let that = this;
    let chattingItemList = [];

    jj.get({
      url: "/private/v1/chat",
      data: {
        page: page || 1
      },
      success: data => {
        data.rooms.map((room, i) => {
        	chattingItemList.push(<ChattingItem key={room.broadcast_chat_id} room={room} owner={this.state.owner} />);
        	if(i === 0) that._reactInternalInstance._currentElement._owner._instance.setState({currentChattingItem: room});
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

class Chatting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "채팅방 관리",
      pageTitleName: "채팅방",
      pageTitleNameSmall: "관리",
			currentChattingItem: null
    }
  }

  componentDidMount() {
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
								<ul className="nav nav-tabs nav-justified">
									<li className="active"><Link to="#">Game</Link></li>
									<li><Link to="#">Indimusic</Link></li>
									<li><Link to="#">Talk</Link></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<ChattingItemList owner={this} />
					</div>
					<div className="col-md-8">
						<div className="col-lg-6">
							<ChattingItemInfo chattingItem={this.state.currentChattingItem} />
						</div>
						<div className="col-lg-6">
							<ChattingItemUserList />
						</div>
					</div>
				</div>
			</section>
    )
  }
}

export default Chatting;