import React, {Component} from 'react';
import ListBoardContent from './ListBoardContent';


class ListBoard extends Component {

	constructor(props) {
		super(props);

	}

	render() {

		let list_content = "";
		if (typeof this.props.list === "object") {
			list_content = this.props.list.map(
				(list) => <ListBoardContent
					key={this.props.inc.number++}
					broadcast_chat_name={list.broadcast_chat_name}
					board_subject={list.board_subject}
					user_nickname={list.user_nickname}
					handleSelect={() => this.props.handleSelect(list.broadcast_chat_id || list.board_idx)}
				/>
			)
		}

		return (
			<ul className="nav nav-stacked">
				{list_content}
			</ul>
		);
	}

}

export default ListBoard;

