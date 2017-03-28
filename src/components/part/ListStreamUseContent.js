import React from 'react';

export default class ListStreamUseContent extends React.Component {

	render() {


		let streamcode_status = '';
		switch (this.props.streamcode_status) {
			case 0:
				streamcode_status = '삭제';
				break;
			case 1:
				streamcode_status = '정상';
				break;
			case 2:
				streamcode_status = '대기';
				break;
			default:
				streamcode_status = this.props.streamcode_status;
				break;
		}



		return (
			<li className="list-item-1 has-right" onClick={this.props.handleSelect}>
				<a>
					<span className="title">
						{ this.props.user_nickname }
					</span>
					<span className="right">
						 { this.props.community_id }
					</span>

				</a>
			</li>
		);
	}
}