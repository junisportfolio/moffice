import React from 'react';
import PageHeader from '../../components/PageHeader';


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
					<div className="col-md-6">
						<div className="box box-solid box-primary">
							<div className="box-header with-border">
								<h3 className="box-title"><b>리스트</b></h3>
							</div>
							<div className="box-body">
								<ul className="nav nav-pills nav-stacked">
									<li className="active list-item-1 has-right">
										<a href="#">
											<span className="title">
												asdsdasd
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
											<span className="right">
												aj123jb21e
											</span>
										</a>
									</li>
									<li>
										<a href="#">
											Sent
										</a>
									</li>
									<li>
										<a href="#">
											Drafts
										</a>
									</li>
									<li>
										<a href="#">
											Sent
										</a>
									</li>
									<li>
										<a href="#">
											Drafts
										</a>
									</li>
									<li>
										<a href="#">
											Sent
										</a>
									</li>
									<li>
										<a href="#">
											Drafts
										</a>
									</li>
									<li>
										<a href="#">
											Sent
										</a>
									</li>
									<li>
										<a href="#">
											Drafts
										</a>
									</li>
								</ul>
							</div>
							<div className="box-footer">
								<ul className="pagination">
									<li><a href="#">1</a></li>
									<li className="active"><a href="#">2</a></li>
									<li><a href="#">3</a></li>
									<li><a href="#">4</a></li>
									<li><a href="#">5</a></li>
								</ul>
							</div>

						</div>
					</div>

					<div className="col-md-6">
						<div className="box box-solid box-success">
							<div className="box-header with-border">
								<h3 className="box-title"><b>홍길동</b>님의 정보</h3>
							</div>
							<div className="box-body">
								<div className="form-group">
									<input type="text" className="form-control"/>
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


