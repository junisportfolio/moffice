import React from 'react';

export default class ListBoardContent extends React.Component {

	render() {
		return (

			<li className="list-item-1 has-right" >
				<a onClick={this.props.handleSelect}>
					<span className="title">
						{this.props.broadcast_chat_name}
					</span>
					<span className="right">
						{this.props.user_nickname}
					</span>
				</a>
			</li>

		);
	}
}

