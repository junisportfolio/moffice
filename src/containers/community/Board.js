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
						<div className="box box-primary">
							<div className="box-header with-border">
								<h3 className="box-title"><b>리스트</b></h3>
							</div>
							<div className="box-body">
								<ul className="nav nav-stacked">
									<li className="active list-item-1 has-right">
										<a href="#">
											<span className="title">
												강호동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
											<span className="right">
												aj123jb21e
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
											<span className="right">
												aj123jb21e
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												홍진경
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
											<span className="right">
												aj123jb21e
											</span>
										</a>
									</li>
									<li className="list-item-1">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
											<span className="right">
												aj123jb21e
											</span>
										</a>
									</li>
									<li className="list-item-1">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
											<span className="right">
												aj123jb21e
											</span>
										</a>
									</li>
									<li className="list-item-1">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
											<span className="right">
												aj123jb21e
											</span>
										</a>
									</li>
									<li className="list-item-1">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
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


						<div className="box box-warning">
							<div className="box-header with-border">

								<ul className="nav nav-tabs">
									<li className="active"><a href="#">문의</a></li>
									<li><a href="#">신고</a></li>
									<li><a href="#">제휴</a></li>
								</ul>

								{/*<h3 className="box-title"><b>리스트</b></h3>*/}
							</div>
							<div className="box-body">
								<ul className="nav nav-stacked">
									<li className="active list-item-1 has-right">
										<a href="#">
											<span className="title">
												강호동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
											<span className="right">
												aj123jb21e
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
											<span className="right">
												aj123jb21e
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												홍진경
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
											<span className="right">
												aj123jb21e
											</span>
										</a>
									</li>
									<li className="list-item-1">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
											<span className="right">
												aj123jb21e
											</span>
										</a>
									</li>
									<li className="list-item-1">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
											<span className="right">
												aj123jb21e
											</span>
										</a>
									</li>
									<li className="list-item-1">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
											<span className="right">
												aj123jb21e
											</span>
										</a>
									</li>
									<li className="list-item-1">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
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


						<div className="box box-warning">
							<div className="box-header with-border">

								<ul className="nav nav-tabs nav-justified">
									<li className="active"><a href="#">문의</a></li>
									<li><a href="#">신고</a></li>
									<li><a href="#">제휴</a></li>
								</ul>
								{/*

								 <ul className="nav nav-tabs">
								 <li className="active"><a href="#">문의</a></li>
								 <li><a href="#">신고</a></li>
								 <li><a href="#">제휴</a></li>
								 </ul>
								 */}

								{/*<h3 className="box-title"><b>리스트</b></h3>*/}
							</div>
							<div className="box-body">
								<div className="form-group">

									<div className="input-group input-group-sm">
										<input type="text" className="form-control"/>
										<span className="input-group-btn">
                      <button type="button" className="btn btn-primary btn-flat">검색</button>
                    </span>
									</div>

								</div>
								<ul className="nav nav-stacked">
									<li className="active list-item-1 has-right">
										<a href="#">
											<span className="title">
												강호동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
											<span className="right">
												aj123jb21e
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
											<span className="right">
												aj123jb21e
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												홍진경
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
											<span className="right">
												aj123jb21e
											</span>
										</a>
									</li>
									<li className="list-item-1">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
											<span className="right">
												aj123jb21e
											</span>
										</a>
									</li>
									<li className="list-item-1">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
											<span className="right">
												aj123jb21e
											</span>
										</a>
									</li>
									<li className="list-item-1">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
											<span className="right">
												aj123jb21e
											</span>
										</a>
									</li>
									<li className="list-item-1">
										<a href="#">
											<span className="title">
												홍길동
											</span>
											<span className="text">
												가나다라알아란랑
											</span>
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
						<div className="box box-success">
							<div className="box-header with-border">
								<h3 className="box-title"><b>홍길동</b>님의 정보</h3>
							</div>
							<div className="box-body border-style">

								<form className="form-horizontal">
									<div className="form-group">
										<label className="control-label col-xs-4" for="id">아이디:</label>
										<div className="col-xs-8">
											<label className="control-label">
												react
											</label>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="name">이름:</label>
										<div className="col-xs-8">
											<label className="control-label">
												홍길동
											</label>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="nick">닉네임:</label>
										<div className="col-xs-8">
											<label className="control-label">
												마젠다
											</label>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="email">이메일:</label>
										<div className="col-xs-8">

											<label className="control-label">
												junishop@gmail.com
											</label>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="grade">등급:</label>
										<div className="col-xs-8">
											<label className="control-label">
												3
											</label>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="id">아이디:</label>
										<div className="col-xs-8">
											<label className="control-label">
												react
											</label>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="name">이름:</label>
										<div className="col-xs-8">
											<label className="control-label">
												홍길동
											</label>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="nick">닉네임:</label>
										<div className="col-xs-8">
											<label className="control-label">
												마젠다
											</label>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="email">이메일:</label>
										<div className="col-xs-8">

											<label className="control-label">
												junishop@gmail.com
											</label>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="email">이메일:</label>
										<div className="col-xs-8">

											<label className="control-label">
												junishop@gmail.com
											</label>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="grade">등급:</label>
										<div className="col-xs-8">
											<label className="control-label">
												3
											</label>
										</div>
									</div>
									<div className="form-group">
										<div className="col-sm-offset-4 col-xs-8">
											<button type="button" className="btn btn-warning">수정</button>
											{/*
											 <button type="button" className="btn btn-default">수정</button>
											 <button type="button" className="btn btn-primary">수정</button>
											 <button type="button" className="btn btn-success">수정</button>
											 <button type="button" className="btn btn-info">수정</button>
											 <button type="button" className="btn btn-danger">수정</button>
											 */}

										</div>
									</div>
								</form>

							</div>

						</div>


						<div className="box box-danger">
							<div className="box-header with-border">
								<h3 className="box-title"><b>홍길동</b>님의 정보</h3>
							</div>
							<div className="box-body border-style">

								<form className="form-horizontal">
									<div className="form-group">
										<label className="control-label col-xs-4" for="id">아이디:</label>
										<div className="col-xs-8">
											<input type="text" className="form-control" id="id" value="react" placeholder=""/>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="name">이름:</label>
										<div className="col-xs-8">
											<input type="text" className="form-control" id="name" value="홍길동" placeholder=""/>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="nick">닉네임:</label>
										<div className="col-xs-8">
											<input type="text" className="form-control" id="nick" value="마젠다" placeholder=""/>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="email">이메일:</label>
										<div className="col-xs-8">
											<input type="email" className="form-control" id="email" value="junishop@gmail.com"
														 placeholder=""/>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="grade">등급:</label>
										<div className="col-xs-8">
											<input type="email" className="form-control" id="grade" value="3" placeholder=""/>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="id">아이디:</label>
										<div className="col-xs-8">
											<input type="text" className="form-control" id="id" value="react" placeholder=""/>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="name">이름:</label>
										<div className="col-xs-8">
											<input type="text" className="form-control" id="name" value="홍길동" placeholder=""/>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="nick">닉네임:</label>
										<div className="col-xs-8">
											<input type="text" className="form-control" id="nick" value="마젠다" placeholder=""/>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="email">이메일:</label>
										<div className="col-xs-8">
											<input type="email" className="form-control" id="email" value="junishop@gmail.com"
														 placeholder=""/>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="email">이메일:</label>
										<div className="col-xs-8">
											<input type="email" className="form-control" id="email" value="junishop@gmail.com"
														 placeholder=""/>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="grade">등급:</label>
										<div className="col-xs-8">
											<input type="email" className="form-control" id="grade" value="3" placeholder=""/>
										</div>
									</div>
									<div className="form-group">
										<div className="col-sm-offset-4 col-xs-8">
											<div className="checkbox">
												<label><input type="checkbox"/> 체크박스</label>
											</div>
										</div>
									</div>
									<div className="form-group">
										<div className="col-sm-offset-4 col-xs-8">
											<button type="submit" className="btn btn-success">완료</button>
										</div>
									</div>
								</form>

							</div>

						</div>
					</div>
				</div>
			</section>
		)
	}
}


export default Board;


