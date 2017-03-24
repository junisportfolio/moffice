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
					broadcast_chat_name={list.broadcast_chat_name}
					user_nickname={list.user_nickname}
					handleSelect={() => this.props.handleSelect(list.broadcast_chat_id)}
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

