import React from 'react';

export default class ListDefaultContent extends React.Component {

	render() {
		return (

			<li className="list-item-1 has-right" >
				<a onClick={this.props.handleSelect}>
					<span className="title">
						{this.props.user_name}
					</span>
					<span className="text">
						{this.props.user_status}
					</span>
					<span className="right">
						{this.props.user_nickname}
					</span>
				</a>
			</li>

		);
	}
}

