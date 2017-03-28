import React, {Component} from 'react';


class BoardContent extends Component {
	render() {
    let options = "";
    if(this.props.boards) {
      options = this.props.boards.map(board => (<option key={"board" + board.value} value={board.value}>{board.text}</option>));
    }

		let board_id = "";
		let board_subject = "";
		let board_content = "";
		let board_status = "";
		let board_notice_type = "";

		if(this.props.board_edit_mode) {
      board_id = <select className="form-control" value={this.props.input_board_id} onChange={this.props.handleBoardId}>
				{options}
			</select>;
      board_subject = <input type="text" className="form-control" value={this.props.input_board_subject} onChange={this.props.handleBoardSubject} />;
      board_content = <textarea className="form-control embed-responsive-item" value={this.props.input_board_content.__html} onChange={this.props.handleBoardContent} />;
			board_status = <select className="form-control" value={this.props.input_board_status} onChange={this.props.handleBoardStatus}>
					<option value="0">승인대기</option>
					<option value="1">노출</option>
					<option value="99">삭제</option>
				</select>;
      board_notice_type = <select className="form-control" value={this.props.input_board_notice_type} onChange={this.props.handleBoardNoticeType}>
				<option value="0">일반글</option>
				<option value="1">게시판 공지</option>
				<option value="2">전체 공지</option>
			</select>;
		} else {
      board_id = (() => {
      	if(this.props.boards) {
          return this.props.boards.filter(option => option.value === this.props.data_board_id).map(option => option.text);
				} else {
      		return this.props.data_board_id;
				}
			})();
      board_subject = this.props.data_board_subject;
      board_content = this.props.data_board_content ? (<div className="embed-responsive-item" dangerouslySetInnerHTML={this.props.data_board_content}  />) : "";
      board_status = (() => {
      	switch(this.props.data_board_status) {
					case "0": return "승인대기"; break;
					case "1": return "노출"; break;
					case "99": return "삭제"; break;
					default: return this.props.data_board_status + ", 서버 관리자에게 문의해 주세요.";
				}
      })();
      board_notice_type = (() => {
        switch(this.props.data_board_notice_type) {
          case "0": return "일반글"; break;
          case "1": return "게시판 공지"; break;
          case "2": return "전체 공지"; break;
          default: return this.props.data_board_notice_type + ", 서버 관리자에게 문의해 주세요.";
        }
      })();
		}

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
					<th>게시판 구분</th>
					<td colSpan="3" className="text-left">{board_id}</td>
				</tr>
				<tr>
					<th>게시글 제목</th>
					<td colSpan="3" className="text-left">{board_subject}</td>
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
				<tr>
					<th>상태</th>
					<td>{board_status}</td>
					<th>공지여부</th>
					<td>{board_notice_type}</td>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td colSpan="4" className="content-area">
						<div className="embed-responsive embed-responsive-4by3">
							{board_content}
						</div>
					</td>
				</tr>
				</tbody>

			</table>
		);
	}

}

export default BoardContent;






































