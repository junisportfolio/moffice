import React, { Component } from 'react';
import ChattingRoomDetail from './ChattingRoomDetail';
import ChattingRoomUserList from './ChattingRoomUserList';
import ChattingRoomUserListItem from './ChattingRoomUserListItem';
import jj from '../../../jasync';

class ChattingRoomInfo extends Component {
  render() {
    return (
      <div className="col-md-8">
        <div className="col-lg-6">
          <ChattingRoomDetail managers={this.props.managers} silences={this.props.silences} room={this.props.room} owner={this} />
        </div>
        <div className="col-lg-6">
          <ChattingRoomUserList users={this.props.users} owner={this} />
        </div>
      </div>
    );
  }
}

export default ChattingRoomInfo;