import React from 'react';
import PageHeader from '../../components/PageHeader';
import {
	BoxTitle,
	Button, Label,
	Input, InputGroup, InputGroupBtn,
	ListDefault,
	ListBoard,
	ListComment,
	Pagination
} from '../../components/part/';

import BoardContent from './BoardContent';


class Board extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "게시판관리",
			pageTitleName: "게시판",
			pageTitleNameSmall: "관리"
		}
	}





	render() {

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

								<ListBoard
									list={this.state.list}
								/>

							</div>
							<div className="box-footer">

								<Pagination
									pagination=""
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

								</div>
								<div className="box-body">

									<BoardContent

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
										list={this.state.commentlist}
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


