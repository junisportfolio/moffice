import React from 'react';
import PageHeader from '../../components/PageHeader';


class Filter extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "필터링관리",
			pageTitleName: "필터링",
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

					<div className="col-md-8">
						<div className="box box-primary">
							<div className="box-header with-border">

								<h3 className="box-title"><b>필터링</b> 리스트</h3>

							</div>
							<div className="box-body">
								<ul className="list-group">
									<li className="list-group-item">
										<div className="input-group input-group-sm">
											<div className="trans-content">
												<span className="btn btn-warning btn-flat fll">
													씨발
												</span>
												<span className="btn btn-primary btn-flat flr">
													착해
												</span>
											</div>
											<span className="input-group-btn">
												<button className="btn btn-danger">
													삭제
												</button>
											</span>
										</div>
									</li>
									<li className="list-group-item">
										<div className="input-group input-group-sm">
											<div className="trans-content">
												<span className="btn btn-warning btn-flat fll">
													씨발
												</span>
												<span className="btn btn-primary btn-flat flr">
													착해
												</span>
											</div>
											<span className="input-group-btn">
												<button className="btn btn-danger">
													삭제
												</button>
											</span>
										</div>
									</li>
									<li className="list-group-item">
										<div className="input-group input-group-sm">
											<div className="trans-content">
												<span className="btn btn-warning btn-flat fll">
													씨발
												</span>
												<span className="btn btn-primary btn-flat flr">
													착해
												</span>
											</div>
											<span className="input-group-btn">
												<button className="btn btn-danger">
													삭제
												</button>
											</span>
										</div>
									</li>
									<li className="list-group-item">
										<div className="input-group input-group-sm">
											<div className="trans-content">
												<span className="btn btn-warning btn-flat fll">
													씨발
												</span>
												<span className="btn btn-primary btn-flat flr">
													착해
												</span>
											</div>
											<span className="input-group-btn">
												<button className="btn btn-danger">
													삭제
												</button>
											</span>
										</div>
									</li>
									<li className="list-group-item">
										<div className="input-group input-group-sm">
											<div className="trans-content">
												<span className="btn btn-warning btn-flat fll">
													씨발
												</span>
												<span className="btn btn-primary btn-flat flr">
													착해
												</span>
											</div>
											<span className="input-group-btn">
												<button className="btn btn-danger">
													삭제
												</button>
											</span>
										</div>
									</li>
									<li className="list-group-item">
										<div className="input-group input-group-sm">
											<div className="trans-content">
												<span className="btn btn-warning btn-flat fll">
													씨발
												</span>
												<span className="btn btn-primary btn-flat flr">
													착해
												</span>
											</div>
											<span className="input-group-btn">
												<button className="btn btn-danger">
													삭제
												</button>
											</span>
										</div>
									</li>
									<li className="list-group-item">
										<div className="input-group input-group-sm">
											<div className="trans-content">
												<span className="btn btn-warning btn-flat fll">
													씨발
												</span>
												<span className="btn btn-primary btn-flat flr">
													착해
												</span>
											</div>
											<span className="input-group-btn">
												<button className="btn btn-danger">
													삭제
												</button>
											</span>
										</div>
									</li>
									<li className="list-group-item">
										<div className="input-group input-group-sm">
											<div className="trans-content">
												<span className="btn btn-warning btn-flat fll">
													일이삼사오육칠팔구십
												</span>
												<span className="btn btn-primary btn-flat flr">
													일이삼사오육칠팔구십
												</span>
											</div>
											<span className="input-group-btn">
												<button className="btn btn-danger">
													삭제
												</button>
											</span>
										</div>
									</li>
									<li className="list-group-item">
										<div className="input-group input-group-sm">
											<div className="trans-content">
												<span className="btn btn-warning btn-flat fll">
													씨발
												</span>
												<span className="btn btn-primary btn-flat flr">
													착해
												</span>
											</div>
											<span className="input-group-btn">
												<button className="btn btn-danger">
													삭제
												</button>
											</span>
										</div>
									</li>
									<li className="list-group-item">
										<div className="input-group input-group-sm">
											<div className="trans-content">
												<span className="btn btn-warning btn-flat fll">
													씨발
												</span>
												<span className="btn btn-primary btn-flat flr">
													착해
												</span>
											</div>
											<span className="input-group-btn">
												<button className="btn btn-danger">
													삭제
												</button>
											</span>
										</div>
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

					<div className="col-md-4">


						<div className="box box-danger">
							<div className="box-header with-border">

								<h3 className="box-title"><b>채팅방</b>참여자 리스트</h3>

							</div>
							<div className="box-body border-style">

								<form className="form-horizontal">
									<div className="form-group">
										<label className="control-label col-xs-4">필터 전:</label>
										<div className="col-xs-8">
											<input type="text" className="form-control"/>
										</div>

									</div>
									<div className="form-group">
										<label className="control-label col-xs-4">필터 후:</label>
										<div className="col-xs-8">
											<input type="text" className="form-control"/>
										</div>
									</div>
									<div className="form-group">
										<button className="btn btn-success form-control">등록</button>
									</div>
									<div className="form-group">
										<label className="control-label col-xs-4">캐시 생성:</label>
										<div className="col-xs-8">
											<button className="btn btn-primary form-control">생성</button>
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


export default Filter;