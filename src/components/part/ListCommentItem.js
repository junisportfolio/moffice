import React from 'react';
import jasync from '../../jasync';

export default class ListCommentItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit_mode: false,
      content: "",
      validate: true
    }
  }

  componentDidMount() {
    this.setState({content: this.props.comment_content.__html});

    if(this.props.comment_status === "99") {
      this.setState({validate: false});
		}
  }

  handleChange(e) {
    this.setState({content: e.target.value});
  }

  handleEditMode() {
    this.setState({edit_mode: true});
  }

  handleComplete() {
  	let that = this;

  	if(confirm("정말 해당 댓글을 수정하시겠습니까?")) {
  		jasync.post({
  			url: "/private/v1/board/" + this.props.board_id + "/" + this.props.board_idx + "/comment",
				data: {
  				comment_content: this.state.content
				},
				error: err => {
  				if(err.status === 401) {
  					alert("권한이 충분치 않습니다.");
					}
				}
			})
		}
	}

  handleRemove() {
    let that = this;

    if(confirm("해당 댓글을 삭제하시겠습니까?")) {
      jasync.delete({
        url: "/private/v1/board/" + this.props.board_id + "/" + this.props.board_idx + "/comment/" + this.props.comment_idx,
        success: sss => {
          if(sss.result === "ok") {
            alert("댓글이 삭제되었습니다.");

            that.setState({validate: false});
          }
        }
      });
    }
  }

  handleViewMode() {
    this.setState({edit_mode: false});
  }

  render() {
    let content = this.state.edit_mode ? (
				<textarea name="" id="" rows="5" className="comment-area" value={this.state.content} onChange={this.handleChange.bind(this)}></textarea>
      ) : (
				<div className="comment-area" dangerouslySetInnerHTML={this.props.comment_content} />
      );

    let button = this.state.edit_mode ? (
        [
					<button key="btn0" className="btn btn-success" onClick={this.handleComplete.bind(this)}>완료</button>,
					<button key="btn1" className="btn btn-danger" onClick={this.handleViewMode.bind(this)}>취소</button>
        ]
      ) : (
        [
					<button key="btn2" className="btn btn-warning" onClick={this.handleEditMode.bind(this)}>변경</button>,
					<button key="btn3" className="btn btn-danger" onClick={this.handleRemove.bind(this)}>삭제</button>
        ]
      );

    let deleteMark = this.state.validate ? (
        ""
      ) : (
        "삭제된 댓글입니다."
      );

    return (
			<li className={(this.state.validate ? "" : "danger ") + "list-group-item"}>
				<div className="writer">
						<span className="icon">
							<img src={process.env.img + this.props.user_icon} />
						</span>
					<span className="name">
					{this.props.user_nickname}{deleteMark ? "(" + deleteMark + ")" : ""}
				</span>
					<span className="date">
					등록일 :
					<span className="data">{this.props.comment_registration_date}</span>
				</span>
					<span className="location">
					등록IP :
					<span className="data">{this.props.comment_ip}</span>
				</span>
				</div>
				<div className="controler">
          {button}
				</div>
				<hr/>
        {content}
			</li>
    );
  }
}

