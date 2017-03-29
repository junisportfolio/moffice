import React from 'react';

export default class ListCoinContent extends React.Component {

	render() {

		return (
			<li className={"list-item-1 has-right" + (this.props.current_idx === this.props.user_id ? " active" : "")} onClick={this.props.handleSelect}>
				<a>
					<span className="title">
						{this.props.user_name}
					</span>
					<span className="text">
						{this.props.user_nickname}
					</span>
					<span className="right">
						{this.props.user_total_coin}
					</span>
				</a>
			</li>
		);
	}
}
