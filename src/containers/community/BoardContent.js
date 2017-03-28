import React, {Component} from 'react';


class BoardContent extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		return (
			<table className="table-board">
				<colgroup>
					<col width={'20%'}/>
					<col width={'30%'}/>
					<col width={'20%'}/>
					<col width={'30%'}/>
				</colgroup>
				<thead>
				<tr>
					<th>게시글 제목</th>
					<td colSpan="3" className="text-left">{this.props.data_board_subject}</td>
				</tr>
				<tr>
					<th>작성자</th>
					<td>{this.props.data_user_nickname}</td>
					<th>등록일</th>
					<td>{this.props.data_board_registration_date}</td>
				</tr>
				<tr>
					<th>조회수</th>
					<td>{this.props.data_board_view_count}</td>
					<th>추천</th>
					<td>{this.props.data_board_like}</td>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td colSpan="4" className="content-area">
						<div className="embed-responsive embed-responsive-4by3">
							{this.props.data_board_content ? (<div className="embed-responsive-item" dangerouslySetInnerHTML={this.props.data_board_content}  />) : ""}
						</div>
					</td>
				</tr>
				</tbody>

			</table>
		);
	}

}

export default BoardContent;






































