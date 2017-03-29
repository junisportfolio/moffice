import React from 'react';

export default class ListBroadContent extends React.Component {

	render() {


		let broadcast_status = '';
		switch (this.props.broadcast_status) {
			case 0:
				broadcast_status = '삭제';
				break;
			case 1:
				broadcast_status = '방송';
				break;
			case 2:
				broadcast_status = '종료';
				break;
			case 3:
				broadcast_status = '준비중';
				break;
			default:
				broadcast_status = this.props.broadcast_status;
				break;
		}

		let broadcast_type = '';
		switch (this.props.broadcast_type) {
			case 1:
				broadcast_type = '모코비';
				break;
			case 2:
				broadcast_type = '유튜브';
				break;
			case 3:
				broadcast_type = '트위치';
				break;
			default:
				broadcast_type = this.props.broadcast_type;
				break;
		}



		return (
			<li className={"list-item-1 has-right" + (this.props.current_idx === this.props.broadcast_idx ? " active" : "")} onClick={this.props.handleSelect}>
				<a>

					<span className="text">
						{this.props.broadcast_idx}번 )
					</span>
					<span className="title">
						{this.props.broadcast_subject}
					</span>
					<span className="right">
						{ broadcast_type } - { broadcast_status }
					</span>
				</a>
			</li>
		);
	}
}

