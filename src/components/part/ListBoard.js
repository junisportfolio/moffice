import React, {Component} from 'react';
import ListBoardContent from './ListBoardContent';


class ListBoard extends Component {

	constructor(props) {
		super(props);

	}

	render() {

		let list_content = "";
		if (typeof this.props.board === "object") {
			list_content = this.props.board.map(
				(list) => <ListBoardContent
					community_id={list.community_id}
					user_id={list.user_id}
					user_nickname={list.user_nickname}
					user_name={list.user_name}
					user_email={list.user_email}
					community_user_level={list.user_email}
					user_status={list.user_status}
					user_registration_date={this.state.data.user_registration_date}
					handleSelect={() => this.handleSelect(list.user_id)}
				/>
			)
		}

		return (
			<ul className="nav nav-stacked">
				{list_content}

				<li className="list-item-1 has-right" >
					<a>
					<span className="title">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, mollitia.
					</span>
						<span className="right">
						Name
					</span>
					</a>
				</li>
				<li className="list-item-1 has-right" >
					<a>
					<span className="title">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dignissimos dolores ea ex incidunt optio provident quisquam quo tempore ullam?
					</span>
						<span className="right">
						Name
					</span>
					</a>
				</li>
			</ul>
		);
	}

}

export default ListBoard;

