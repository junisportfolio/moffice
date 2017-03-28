import React, {Component} from 'react';
import ListCommentItem from './ListCommentItem';


class ListComment extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		let list_content = "";
		if (typeof this.props.list === "object") {
			list_content = this.props.list.map(
				(list) => <ListCommentItem
					key={this.props.inc.number++}
					board_id={this.props.board_id}
					board_idx={this.props.board_idx}
					comment_content={{__html: list.comment_content}}
					comment_depth={list.comment_depth}
					comment_group={list.comment_group}
					comment_idx={list.comment_idx}
					comment_ip={list.comment_ip}
					comment_is_mine={list.comment_is_mine}
					comment_order_num={list.comment_order_num}
					comment_registration_date={list.comment_registration_date}
					comment_status={list.comment_status}
					user_icon={list.user_icon}
					user_id={list.user_id}
					user_level={list.user_level}
					user_nickname={list.user_nickname}
				/>
			);
		}

		if(list_content === "") {
      list_content = "등록된 댓글이 없습니다.";
		}

		return (
			<ul className="list-group comment-list">
				{list_content}
			</ul>
		);
	}

}

export default ListComment;






































