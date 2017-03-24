import React, { Component } from 'react';
import PageHeader from '../../../components/PageHeader';
import { Link } from 'react-router-dom';
import ChattingRoomList from './ChattingRoomList';
import ChattingRoomInfo from './ChattingRoomInfo';
import ChattingRoomListItem from './ChattingRoomListItem';
import ChattingRoomUserListItem from './ChattingRoomUserListItem';
import jasync from '../../../jasync';

class Chatting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "채팅방 관리",
      pageTitleName: "채팅방",
      pageTitleNameSmall: "관리",
      roomList: [],
      roomPage: 1,
      totalPage: 1,
      currentRoom: "",
      userList: [],
      managerList: [],
      blockList: [],
      silenceList: []
    }
  }

  componentDidMount() {
    this.getList();
  }

  getList (page) {
    let pageNum = page || 1;
    let that = this;
    let chattingRoomList = [];

    jasync.get({
      url: "/private/v1/chat",
      data: {
        page: pageNum,
        limit: 10
      },
      success: data => {
        chattingRoomList = data.rooms.map((room, i) => {
          if(i === 0) {
            that.setState({currentRoom: room});
          }

          return <ChattingRoomListItem key={room.broadcast_chat_id} room={room} owner={that} />;
        });

        that.setState({
          roomPage: pageNum,
          roomList: chattingRoomList,
          totalPage: data.total_page
        });

        that.pickRoomItem();
      }
    });
  }

  pickRoomItem() {
    this.getUserList();
    this.getSilenceList();
  }

  getUserList() {
    let that = this;

    if(this.state.currentRoom) {
      jasync.get({
        url: "/private/v1/chat/user_list/" + this.state.currentRoom.broadcast_chat_id,
        success: data => {
          let managerList = [];
          let userList = data.users.map((user, i) => {
            if(user.user_manager === 1) {
              managerList.push(<button className="btn btn-default">{user.user_nickname} <span className="badge">해제</span></button>);
            }
            return <ChattingRoomUserListItem key={user.user_id} chat={that.state.currentRoom} user={user} />;
          });

          if(userList.length === 0) {
            userList = <li className="list-item-1 has-right">참여한 사용자가 없습니다.</li>;
          }
          
          if(managerList.length === 0) {
            managerList = <label className="control-label">없음</label>;
          }
          
          that.setState({
            managerList: managerList,
            userList: userList
          });
        }
      });
    }
  }

  getSilenceList() {
    let that = this;

    if(this.state.currentRoom) {
      jasync.get({
        url: "/private/v1/chat/silence_list/" + this.state.currentRoom.broadcast_chat_id,
        success: data => {
          let silenceList = data.users.map((user, i) => {
            return <button className="btn btn-default">{user.user_nickname} <span className="badge">해제</span></button>;
          });

          if(silenceList.length === 0) {
            silenceList = <label className="control-label">없음</label>;
          }

          that.setState({
            silenceList: silenceList
          });
        }
      });
    }
  }

  chatManager(user) {
    if(confirm("해당 사용자를 채팅방의 운영자로 지정하시겠습니까?")){
      jasync.post({
        url: "/private/v1/chat/chat_manager/" + this.state.currentRoom.broadcast_chat_id + "/" + user.user_id
      });
    }
  }

  chatUnmanager(user) {
    if(confirm("해당 사용자를 채팅방의 운영자 권한을 회수하시겠습니까?")){
      jasync.post({
        url: "/private/v1/chat/chat_unmanager/" + this.state.currentRoom.broadcast_chat_id + "/" + user.user_id
      });
    }
  }

  chatBlock(user) {
    if(confirm("해당 사용자를 채팅방에서 차단하시겠습니까?")){
      jasync.post({
        url: "/private/v1/chat/chat_block/" + this.state.currentRoom.broadcast_chat_id + "/" + user.user_id
      });
    }
  }

  chatUnblock(user) {
    if(confirm("해당 사용자의 채팅방 차단을 취소하시겠습니까?")){
      jasync.post({
        url: "/private/v1/chat/chat_unblock/" + this.state.currentRoom.broadcast_chat_id + "/" + user.user_id
      });
    }
  }

  chatSilence(user) {
    if(confirm("해당 사용자를 채팅방에서 침묵시키시겠습니까?")){
      jasync.post({
        url: "/private/v1/chat/chat_silence/" + this.state.currentRoom.broadcast_chat_id + "/" + user.user_id
      });
    }
  }

  chatUnsilence(user) {
    if(confirm("해당 사용자의 채팅방 침묵을 해제시키시겠습니까?")){
      jasync.post({
        url: "/private/v1/chat/chat_unsilence/" + this.state.currentRoom.broadcast_chat_id + "/" + user.user_id
      });
    }
  }

  userOut(user) {
    if(confirm("해당 사용자를 채팅방에서 강퇴시키시겠습니까?")){
      jasync.delete({
        url: "/private/v1/chat/user_out/" + this.state.currentRoom.broadcast_chat_id + "/" + user.user_id
      });
    }
  }

  userOutAll(user) {
    if(confirm("해당 사용자를 참여한 모든 채팅방에서 강퇴시키시겠습니까?")){
      jasync.delete({
        url: "/private/v1/chat/user_out/" + user.user_id
      });
    }
  }

  render() {
    console.log(this.state);

    return (
			<section className="content">
				<PageHeader pageTitle={this.state.pageTitle} pageTitleName={this.state.pageTitleName} pageTitleNameSmall={this.state.pageTitleNameSmall} />
				<div className="row">
					<div className="col-md-12">
            {/* START TODO 채널 목록 탭 빼기 */}
						<div className="box box-info">
							<div className="box-header">
								<ul className="nav nav-tabs nav-justified">
									<li className="active"><Link to="#">Game</Link></li>
									<li><Link to="#">Indimusic</Link></li>
									<li><Link to="#">Talk</Link></li>
								</ul>
							</div>
						</div>
            {/* END TODO */}
					</div>
					<ChattingRoomList rooms={this.state.roomList} search={this.getList.bind(this)} owner={this} totalPage={this.state.totalPage} />
					<ChattingRoomInfo room={this.state.currentRoom} managers={this.state.managerList} users={this.state.userList} silences={this.state.silenceList} />
				</div>
			</section>
    );
  }
}

export default Chatting;