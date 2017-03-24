import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ChattingRoomListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      room: props.room
    };
  }

  render() {
    return (
      <li className={"list-item-1 has-right" + ((this.state.room === this.props.owner.state.currentRoom) ? " active" : "")} onClick={() => {
        this.props.owner.setState({currentRoom: this.state.room});
        this.props.owner.pickRoomItem();
      }}>
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

export default ChattingRoomListItem;