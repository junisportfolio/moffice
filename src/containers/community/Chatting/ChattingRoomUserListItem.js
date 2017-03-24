import React, { Component } from 'react';
import jasync from '../../../jasync';

class ChattingItemUserItem extends Component {


  render() {
    return (
      <li className="list-item-1 has-right">
        <a href="#">
					<span className="title">
            {this.props.user.user_nickname}
					</span>
          <button className="btn btn-success" onClick={this.grant.bind(this)}>매니져로</button>

          <button className="btn btn-danger" onClick={this.block.bind(this)}>차단</button>

          <button className="btn btn-warning" onClick={this.silence.bind(this)}>침묵</button>

          <button className="btn btn-danger" onClick={this.out.bind(this)}>강퇴</button>
        </a>
      </li>
    );
  }
}

export default ChattingItemUserItem;