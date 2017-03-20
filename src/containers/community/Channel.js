import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Router, Route, Switch, Link } from 'react-router-dom';


class Channel extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "채널관리",
			pageTitleName: "채널",
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

					<div className="col-md-12">
						<div className="box box-info">
							<div className="box-header">
									<ul className="nav nav-tabs nav-justified">
										<li className="active" ><Link to="game">Game</Link></li>
										<li><Link to="indimusic">Indimusic</Link></li>
										<li><Link to="talk">Talk</Link></li>
									</ul>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="box box-primary">
							<div className="box-header with-border">

								<ul className="nav nav-tabs nav-justified">
									<li className="active" ><Link to="#">All</Link></li>
									<li><Link to="#">BJ</Link></li>
								</ul>

							</div>
							<div className="box-body">

								<div className="input-group input-group-sm">
									<input type="text" className="form-control"/>
									<span className="input-group-btn">
                      <button type="button" className="btn btn-primary btn-flat">검색</button>
                    </span>
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

					<div className="col-md-8">
						<div className="box box-success">
							<div className="box-header with-border">
								<h3 className="box-title"><b>홍길동</b>님의 정보</h3>
							</div>
							<div className="box-body border-style">

								<form className="form-horizontal">
									<div className="form-group">
										<label className="control-label col-xs-4" for="grade">Channel 번호:</label>
										<div className="col-xs-8">
											<label className="control-label">
												95
											</label>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="grade">Channel 상태:</label>
										<div className="col-xs-8">

											<div className="input-group input-group-sm">
												<label className="control-label">
													1
												</label>
												<span className="input-group-btn">
													<button type="button" className="btn btn-warning btn-flat">수정</button>
											</span>
											</div>
										</div>

									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="grade">Channel 상태:</label>
										<div className="col-xs-8">

											<div className="input-group input-group-sm">
												<select className="form-control" value="1">
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4</option>
													<option value="5">5</option>
												</select>
												<span className="input-group-btn">
													<button type="button" className="btn btn-success btn-flat">변경</button>
											</span>
											</div>
										</div>

									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="grade">Channel 레벨:</label>
										<div className="col-xs-8">
											<label className="control-label">
												3
											</label>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="id">Channel 가입:</label>
										<div className="col-xs-8">
											<label className="control-label">
												2017-02-22 17:32:54
											</label>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="id">Channel 프사:</label>
										<div className="col-xs-8">

											<div className="input-group input-group-sm">
												<img src="http://placehold.it/50x50" alt="" width={50} height={50}/>
												<span className="input-group-btn">
													<button type="button" className="btn btn-warning btn-flat">수정</button>
												</span>
											</div>

										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="id">Channel 프사:</label>
										<div className="col-xs-8">

											<div className="input-group input-group-sm">
												<input type="file" className="form-control"/>
												
												<span className="input-group-btn">
													<button type="button" className="btn btn-success btn-flat">변경</button>
													<button type="button" className="btn btn-danger btn-flat">취소</button>
												</span>
											</div>

										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="name">닉네임:</label>
										<div className="col-xs-8">
											<label className="control-label">
												마젠다다
											</label>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="nick">이름:</label>
										<div className="col-xs-8">
											<label className="control-label">
												조용준
											</label>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="grade">이메일:</label>
										<div className="col-xs-8">
											<label className="control-label">
												juni84@daum.net
											</label>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="email">계정 생성일:</label>
										<div className="col-xs-8">

											<label className="control-label">
												2017-02-15 15:48:01
											</label>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="email">최종 로그인:</label>
										<div className="col-xs-8">
											<label className="control-label">
												2017-03-20 13:05:10
											</label>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="nick">유저 상태:</label>
										<div className="col-xs-8">
											<label className="control-label">
												3
											</label>
										</div>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4" for="nick">BJ 등록:</label>
										<div className="col-xs-8">
											<button className="btn btn-success">등록</button>
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


export default Channel;