import React, {Component} from 'react';
import BoardContentCommentItem from './BoardContentCommentItem';


class BoardContentComment extends Component {

	constructor(props) {
		super(props);

	}

	render() {

		let list_content = "";
		if (typeof this.props.commentlist === "object") {
			list_content = this.props.commentlist.map(
				(list) => <BoardContentCommentItem
					community_id={list.community_id}
					user_id={list.user_id}
					user_nickname={list.user_nickname}
					user_name={list.user_name}
					user_email={list.user_email}
					community_user_level={list.user_email}
					user_status={list.user_status}
					user_registration_date={this.state.data.user_registration_date}
					handleSelect={() => this.handleSelect(list.user_id)}
				/>
			)
		}

		return (
			<ul className="list-group comment-list">

				{list_content}


				<li className="list-group-item">

					<div className="writer">
							<span className="icon">
								<img src="http://office.beta-mocobee.com//data/image/avatar/ava_03.png"/>
							</span>
						<span className="name">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, voluptatum!
							</span>
						<span className="date">
								등록일 :
								<span className="data">2017-02-01</span>
							</span>
						<span className="location">
								등록IP :
								<span className="data">59.10.126.8</span>
							</span>
					</div>
					<div className="controler">
						<button className="btn btn-warning">R</button>
						<button className="btn btn-danger">D</button>

					</div>
					<hr/>
					<textarea name="" id="" rows="5" className="comment-area"
										value={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>Accusantium aperiam, aspernatur dolorem <br/>doloremque, dolores fugit libero placeat quia, quis quos rem soluta velit. Ab, accusantium,<br/> animi atque doloremque ducimus eaque esse exercitationem harum neque,<br/> nulla officiis omnis ratione sed similique.'}>

						</textarea>
				</li>
				<li className="list-group-item">

					<div className="writer">
							<span className="icon">
								<img src="http://office.beta-mocobee.com//data/image/avatar/ava_03.png"/>
							</span>
						<span className="name">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, voluptatum!
							</span>
						<span className="date">
								등록일 :
								<span className="data">2017-02-01</span>
							</span>
						<span className="location">
								등록IP :
								<span className="data">59.10.126.8</span>
							</span>
					</div>
					<div className="controler">
						<button className="btn btn-warning">R</button>
						<button className="btn btn-danger">D</button>

					</div>
					<hr/>
					<div className="comment-area">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>Accusantium aperiam, aspernatur
						dolorem <br/>doloremque, dolores fugit libero placeat quia, quis quos rem soluta velit. Ab,
						accusantium,<br/> animi atque doloremque ducimus eaque esse exercitationem harum neque,<br/>
						nulla officiis omnis ratione sed similique.
					</div>

				</li>
			</ul>
		);
	}

}

export default BoardContentComment;






































