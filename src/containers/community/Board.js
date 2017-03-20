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

					<div className="col-md-4">


						<div className="box box-primary">
							<div className="box-header with-border">
								<h3 className="box-title"><b>리스트</b></h3>
							</div>
							<div className="box-body">
								<ul className="nav nav-stacked">
									<li className="active list-item-1 has-right">
										<a href="#">
											<span className="title">
												rkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnf
											</span>
											<span className="right">
												홍길동
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												rkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnf
											</span>
											<span className="right">
												홍길동
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												rkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnf
											</span>
											<span className="right">
												홍길동
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												rkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnf
											</span>
											<span className="right">
												홍길동
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												rkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnf
											</span>
											<span className="right">
												홍길동
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												rkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnf
											</span>
											<span className="right">
												홍길동가나다라마나암낭만안아ㅏㅇ낭
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												rkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnf
											</span>
											<span className="right">
												홍길동
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												rkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnf
											</span>
											<span className="right">
												홍길동
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												rkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnf
											</span>
											<span className="right">
												홍길동
											</span>
										</a>
									</li>
									<li className="list-item-1 has-right">
										<a href="#">
											<span className="title">
												rkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnfrkskdkedksdjfksjdfkjshfdkjnsdkfjhksjdfnkjsdnfkjndsjkfnksjdnf
											</span>
											<span className="right">
												홍길동
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

						<div className="col-lg-6">
							<div className="box box-success">
								<div className="box-header with-border">
									<h3 className="box-title">
										댓글
									</h3>

								</div>
								<div className="box-body">


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
											<td colSpan="3" className="text-left">adkjwkf lwkdlkwldk l wl dklwkdl kawl kd lawkd lkaw ldk awk
												dlkalwkd lawk dlk awlkd lakw dlkaw ldk lakwfadkjwkf lwkdlkwldk l wl dklwkdl kawl kd lawkd lkaw
												ldk awk dlkalwkd lawk dlk awlkd lakw dlkaw ldk lakwf
											</td>
										</tr>
										<tr>
											<th>작성자</th>
											<td>홍길동</td>
											<th>등록일</th>
											<td>2017.02.15</td>
										</tr>
										<tr>
											<th>조회수</th>
											<td>test4</td>
											<th>추천</th>
											<td>232</td>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td colSpan="4" className="content-area">
												<p>asdmnasbdmjnsajn</p>
												<p>asdmnasbdmjnsajn</p>
												<img src="http://placehold.it/350x150" alt=""/>
												<p>asdmnasbdmjnsajn</p>
											</td>
										</tr>
										</tbody>

									</table>
								</div>

							</div>


						</div>
						<div className="col-lg-6">
							<div className="box box-primary">
								<div className="box-header with-border">
									<h3 className="box-title">
										댓글
									</h3>

								</div>
								<div className="box-body">

									<ul className="list-group comment-list">
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


