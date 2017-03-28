import React from 'react';
import PageHeader from '../../components/PageHeader';
import jasync from '../../jasync';
import {
	BoxTitle,
	Button, Label,
	Input, InputGroup, InputGroupBtn,
	ListDefault,
	ListBoard,
	ListComment,
	Pagination,
	SearchSelect
} from '../../components/part/';

import BoardContent from './BoardContent';


class Board extends React.Component {
	constructor(props) {
		super(props);

		this.inc = {
			number: 0
		};

    this.boards = [
      {value: "global_notice", text: "전체_공지사항"},
      {value: "game_free", text: "게임_자유게시판"},
      {value: "game_humor", text: "게임_유머게시판"},
      {value: "game_notice", text: "게임_공지사항"},
      {value: "game_bjnotice", text: "게임_BJ공지사항"},
      {value: "game_best", text: "게임_베스트"},
      {value: "talk_free", text: "토크_자유게시판"},
      {value: "talk_humor", text: "토크_유머게시판"},
      {value: "talk_notice", text: "토크_공지사항"},
      {value: "talk_bjnotice", text: "토크_BJ공지사항"},
      {value: "talk_best", text: "토크_베스트"},
      {value: "indimusic_free", text: "인디뮤직_자유게시판"},
      {value: "indimusic_humor", text: "인디뮤직_유머게시판"},
      {value: "indimusic_notice", text: "인디뮤직_공지사항"},
      {value: "indimusic_bjnotice", text: "인디뮤직_BJ공지사항"},
      {value: "indimusic_best", text: "인디뮤직_베스트"}
    ];

    this.searchKeys = [
      {value: "board_subject", text: "제목"},
      {value: "user_nickname", text: "닉네임"},
      {value: "ip", text: "IP주소"}
    ];

		this.state = {
			pageTitle: "게시판관리",
			pageTitleName: "게시판",
			pageTitleNameSmall: "관리",

			searchBoardId: this.boards[0].value,
			searchKey: this.searchKeys[0].value,
			searchValue: "",

      limit: 10,
      list: '',
      list_Tcount: '',
      list_Tpage: '',
      list_page: 1,

      board_info: "",
			board_edit_mode: false,

      data_board_idx: "",
      data_user_id: "",
      data_board_update_user_id: "",
      data_board_id: "",
      data_board_subject: "",
      data_board_status: "",
      data_board_notice_type: "",
      data_board_content_data: "",
      data_board_write_ip: "",
      data_board_update_ip: "",
      data_board_update_date: "",
      data_board_view_count: "",
      data_board_thumbnail: "",
      data_board_image: "",
      data_board_like: "",
      data_board_registration_date: "",
      data_user_access_level: "",
      data_user_nickname: "",
      data_user_icon: "",
      data_user_registration_date: "",
      data_user_last_login_date: "",
      data_board_content_idx: "",
      data_board_content: "",

      comment_list_page: 1,
      comment_limit: 5,
      comment_list: "",
      comment_list_Tcount: "",
      comment_list_Tpage: "",


      input_board_id: "",
      input_board_subject: "",
      input_board_content: "",
      input_board_status: "",
      input_board_notice_type: ""
		}
	}

	handleDelete() {
		if(confirm("해당 게시글을 삭제하시겠습니까?")) {
			jasync.delete({
				url: "/private/v1/board/" + this.state.data_board_id + "/" + this.state.data_board_idx,
        success: sss => {
          if(sss.result === "ok") {
            alert("삭제되었습니다.");

            this.getBoardData(this.state.data_board_idx);
          }
        }
			});
		}
	}

	handleModify() {
		if(confirm("수정하시겠습니까?")) {
			jasync.put({
				url: "/private/v1/board/" + this.state.data_board_id + "/" + this.state.data_board_idx,
				data: {
          board_id: this.state.input_board_id,
          board_subject: this.state.input_board_subject,
          board_content: this.state.input_board_content,
          board_status: +this.state.input_board_status,
          board_notice_type: +this.state.input_board_notice_type
        },
				success: sss => {
					if(sss.result === "ok") {
						alert("수정되었습니다.");

						this.getBoardData(this.state.data_board_idx);
					}
				}
			});
		}
	}

	handleBoardId(e) {
		this.setState({input_board_id: e.target.value});
	}

	handleBoardSubject(e) {
		this.setState({input_board_subject: e.target.value});
	}

	handleBoardContent(e) {
		this.setState({input_board_content: e.target.value});
	}

	handleBoardStatus(e) {
		this.setState({input_board_status: e.target.value});
	}

	handleBoardNoticeType(e) {
		this.setState({input_board_notice_type: e.target.value});
	}

	handleEdit() {
		this.setState({
			board_edit_mode: true,
			input_board_id: this.state.data_board_id,
      input_board_subject: this.state.data_board_subject,
      input_board_content: this.state.data_board_content,
      input_board_status: this.state.data_board_status,
      input_board_notice_type: this.state.data_board_notice_type
		});
	}

	handleView() {
		if(confirm("현재 수정 내용이 사라집니다.\n취소하시겠습니까?")) {
      this.setState({
        board_edit_mode: false
      });
		}
	}

	handleSearch() {
		this.getBoardList(1);
	}

	handleChangeBoard(e) {
		this.setState({searchBoardId: e.target.value});
	}

	handleChangeKey(e) {
    this.setState({searchKey: e.target.value});
	}

	handleChangeValue(e) {
    this.setState({searchValue: e.target.value});
	}

  handlePagination(index) {
    this.setState({
      list_page: index
    }, () => {
      this.getBoardList();
    });
  }

  handleCommentPagination(index) {
    this.setState({
      comment_list_page: index
    }, () => {
      this.getCommentList(this.state.board_info);
    });
  }

  handleSelect(board_info) {
		this.getBoardData(board_info);
	}

	handleSelectComment(board_info) {
		this.getCommentList(board_info);
	}

  getBoardList(page) {
    let data = this.state.search_value ? {
        page: page || (isNaN(this.state.list_page) ? 1 : this.state.list_page),
        limit: this.state.limit,
        'search_type[]': this.state.searchKey,
        'search_value[]': this.state.searchValue
      } : {
        page: page || (isNaN(this.state.list_page) ? 1 : this.state.list_page),
        limit: this.state.limit,
      };

		if(this.state.searchBoardId) {
      jasync.get({
        url: "/private/v1/board/" + this.state.searchBoardId,
        data: data,
        success: data => {
          this.setState({
            list: data.board,

            list_Tcount: +data.total_count,
            list_Tpage: +data.total_page,
            list_page: +data.page,

            board_info: data.board ? data.board[0].board_idx : this.state.board_info
          }, () => this.getBoardData(this.state.board_info));
        }
      });
		}
	}

	getBoardData(board_info) {
    jasync.get({
      url: "/private/v1/board/" + this.state.searchBoardId + "/" + board_info,
      success: data => {
        this.setState({
          comment_list_page: 1,
					board_edit_mode: false,
          board_info: data.board.board_idx,
          data_board_idx: data.board.board_idx,
          data_user_id: data.board.user_id,
          data_board_update_user_id: data.board.board_update_user_id,
          data_board_id: data.board.board_id,
          data_board_subject: data.board.board_subject,
          data_board_status: data.board.board_status,
          data_board_notice_type: data.board.board_notice_type,
          data_board_content_data: data.board.board_content_data,
          data_board_write_ip: data.board.board_write_ip,
          data_board_update_ip: data.board.board_update_ip,
          data_board_update_date: data.board.board_update_date,
          data_board_view_count: data.board.board_view_count,
          data_board_thumbnail: data.board.board_thumbnail,
          data_board_image: data.board.board_image,
          data_board_like: data.board.board_like,
          data_board_registration_date: data.board.board_registration_date,
          data_user_access_level: data.board.user_access_level,
          data_user_nickname: data.board.user_nickname,
          data_user_icon: data.board.user_icon,
          data_user_registration_date: data.board.user_registration_date,
          data_user_last_login_date: data.board.user_last_login_date,
          data_board_content_idx: data.board_content.board_content_idx,
          data_board_content: {__html: data.board_content.board_content}
        }, () => this.getCommentList(data.board.board_idx));
      }
    });
	}

  getCommentList(board_info) {
    if(this.state.searchBoardId) {
      jasync.get({
        url: "/private/v1/board/" + this.state.searchBoardId + "/" + board_info + "/comment",
        data: {
          page: this.state.comment_list_page,
          limit: this.state.comment_limit
        },
        success: data => {
          this.setState({
            comment_list: data.comment,

            comment_list_Tcount: +data.comment_count,
            comment_list_Tpage: +data.comment_total_page,
          });
        }
      });
    }
  }

	componentDidMount() {
    this.getBoardList();
	}

	render() {
		let button = "";

		if(this.state.board_edit_mode) {
			button = [
				<button key="modify_btn" className="btn btn-success" onClick={this.handleModify.bind(this)}>확인</button>,
        <button key="delete_btn" className="btn btn-danger" onClick={this.handleView.bind(this)}>취소</button>
			];
		} else {
      button = [
				<button key="modify_btn" className="btn btn-warning" onClick={this.handleEdit.bind(this)}>수정</button>,
				<button key="delete_btn" className="btn btn-danger" onClick={this.handleDelete.bind(this)}>삭제</button>
      ];
		}

		return (
			<section className="content">
				<PageHeader
					pageTitle={this.state.pageTitle}
					pageTitleName={this.state.pageTitleName}
					pageTitleNameSmall={this.state.pageTitleNameSmall}
				/>
				<div className="row">
					<div className="col-md-4">
						<div className="box box-primary">
							<div className="box-header with-border">

								<BoxTitle
									className="box-title"
									mainTitle="게시글"
									subTitle="리스트"
								/>

							</div>
							<div className="box-body">
								<SearchSelect widthRatio="8" options={this.boards} selectedOption={this.state.searchBoardId} handleChange={this.handleChangeBoard.bind(this)} />
								<SearchSelect widthRatio="4" options={this.searchKeys} selectedOption={this.state.searchKey} handleChange={this.handleChangeKey.bind(this)} />
								<div className="input-group input-group-sm col-xs-12 col-sm-12 col-lg-12">
									<input
										type="text"
										name="keyword"
										className="form-control"
										value={this.state.searchValue}
										onChange={this.handleChangeValue.bind(this)}
									/>
									<InputGroupBtn>
										<Button
											type="button"
											className="btn btn-success btn-flat"
											name="검색"
											handleSearch={this.handleSearch.bind(this)}
										/>
									</InputGroupBtn>
								</div>
								<ListBoard
									inc={this.inc}
									list={this.state.list}
									handleSelect={this.handleSelect.bind(this)}
								/>

							</div>
							<div className="box-footer">

								<Pagination
									limit={this.state.limit}
									total_page={this.state.list_Tpage}
									total_count={this.state.list_Tcount}
									list_page={this.state.list_page}
									handlePagination = {this.handlePagination.bind(this)}
								/>

							</div>
						</div>
					</div>
					<div className="col-md-8">
						<div className="col-lg-6">
							<div className="box box-success">
								<div className="box-header with-border">

									<BoxTitle
										className="box-title"
										mainTitle="Name"
										subTitle="님의 게시글"
									/>
									<div className="controller">
										{button}
									</div>
								</div>
								<div className="box-body">

									<BoardContent
										board_edit_mode={this.state.board_edit_mode}
										boards={this.boards}
										data_board_idx={this.state.data_board_idx}
										data_user_id={this.state.data_user_id}
										data_board_update_user_id={this.state.data_board_update_user_id}
										data_board_id={this.state.data_board_id}
										data_board_subject={this.state.data_board_subject}
										data_board_status={this.state.data_board_status}
										data_board_notice_type={this.state.data_board_notice_type}
										data_board_content_data={this.state.data_board_content_data}
										data_board_write_ip={this.state.data_board_write_ip}
										data_board_update_ip={this.state.data_board_update_ip}
										data_board_update_date={this.state.data_board_update_date}
										data_board_view_count={this.state.data_board_view_count}
										data_board_thumbnail={this.state.data_board_thumbnail}
										data_board_image={this.state.data_board_image}
										data_board_like={this.state.data_board_like}
										data_board_registration_date={this.state.data_board_registration_date}
										data_user_access_level={this.state.data_user_access_level}
										data_user_nickname={this.state.data_user_nickname}
										data_user_icon={this.state.data_user_icon}
										data_user_registration_date={this.state.data_user_registration_date}
										data_user_last_login_date={this.state.data_user_last_login_date}
										data_board_content_idx={this.state.data_board_content_idx}
										data_board_content={this.state.data_board_content}
										input_board_id={this.state.input_board_id}
										input_board_subject={this.state.input_board_subject}
										input_board_content={this.state.input_board_content}
										input_board_status={this.state.input_board_status}
										input_board_notice_type={this.state.input_board_notice_type}
										handleBoardId={this.handleBoardId.bind(this)}
										handleBoardSubject={this.handleBoardSubject.bind(this)}
										handleBoardContent={this.handleBoardContent.bind(this)}
										handleBoardStatus={this.handleBoardStatus.bind(this)}
										handleBoardNoticeType={this.handleBoardNoticeType.bind(this)}
									/>

								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="box box-primary">
								<div className="box-header with-border">

									<BoxTitle
										className="box-title"
										mainTitle="댓글"
										subTitle="리스트"
									/>
								</div>
								<div className="box-body">
									<ListComment
										inc={this.inc}
										list={this.state.comment_list}
										board_id={this.state.data_board_id}
										board_idx={this.state.board_info}
										handleSelectComment={this.handleSelectComment.bind(this)}
									/>
									<Pagination
										limit={this.state.comment_limit}
										total_page={this.state.comment_list_Tpage}
										total_count={this.state.comment_list_Tcount}
										list_page={this.state.comment_list_page}
										handlePagination = {this.handleCommentPagination.bind(this)}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Board;


