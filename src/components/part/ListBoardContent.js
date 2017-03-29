import React from 'react';

export default class ListBoardContent extends React.Component {

	render() {
		return (

			<li className={"list-item-1 has-right" + (this.props.current_idx === this.props.board_idx ? " active" : "") }>
				<a onClick={this.props.handleSelect}>
					<span className="title">
						{this.props.broadcast_chat_name || this.props.board_subject}
					</span>
					<span className="right">
						{this.props.user_nickname}
					</span>
				</a>
			</li>

		);
	}
}

