import React, { Component } from 'react';
import ChattingRoomUserListItem from './ChattingRoomUserListItem';
import jj from '../../../jasync';

class ChattingRoomUserList extends Component {
  render() {
    return (
      <div className="box box-danger">
        <div className="box-header with-border">
          <h3 className="box-title"><b>채팅방</b>참여자 리스트</h3>
        </div>
        <div className="box-body">
          <ul className="nav nav-stacked">
            {this.props.users}
          </ul>
        </div>
      </div>
    );
  }
}

export default ChattingRoomUserList;