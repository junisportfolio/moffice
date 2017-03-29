import React, {Component} from 'react';
import ListStreamUseContent from './ListStreamUseContent';

class ListStreamUse extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let list_content = "";
		if (typeof this.props.list === "object") {
			list_content = this.props.list.map( (list, i) => <ListStreamUseContent
					list_index = {i}

					user_id={list.user_id}
					user_nickname={list.user_nickname}
					community_id={list.community_id}
					streamcode_url_rtmp={list.streamcode_url_rtmp}

					// handleSelect={() => this.props.handleSelect(list.streamcode_idx)}

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

export default ListStreamUse;