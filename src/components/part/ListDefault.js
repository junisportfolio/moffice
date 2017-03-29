import React, {Component} from 'react';
import ListDefaultContent from './ListDefaultContent';

class ListDefault extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let list_content = "";
		if (typeof this.props.list === "object") {
			list_content = this.props.list.map(
				(list, i) => <ListDefaultContent
					list_index = {i}
					community_id={list.community_id}
					user_id={list.user_id}
					user_nickname={list.user_nickname}
					user_name={list.user_name}
					user_email={list.user_email}
					user_status={list.user_status}
					current_idx={this.props.current_idx}


					handleSelect={() => this.props.handleSelect(list.user_id)}
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

export default ListDefault;

