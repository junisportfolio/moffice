import React, {Component} from 'react';
import ListStreamContent from './ListStreamContent';

class ListStream extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let list_content = "";
		if (typeof this.props.list === "object") {
			list_content = this.props.list
				.sort(function (a, b) {
					return a.streamcode_idx < b.streamcode_idx ? -1 : a.streamcode_idx > b.streamcode_idx ? 1 : 0;
				})
				.map( (list, i) => <ListStreamContent
					list_index = {i}

					streamcode_idx={list.streamcode_idx}
					user_id={list.user_id}
					streamcode_id={list.streamcode_id}
					streamcode_url={list.streamcode_url}
					streamcode_key={list.streamcode_key}
					streamcode_password={list.streamcode_password}
					streamcode_status={list.streamcode_status}
					streamcode_registration_date={list.streamcode_registration_date}

					handleSelect={() => this.props.handleSelect(list.streamcode_idx, list.user_id)}

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

export default ListStream;
