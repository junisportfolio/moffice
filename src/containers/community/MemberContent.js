import React, {Component} from 'react';


class MemberContent extends Component {

	constructor(props) {
		super(props);

	}

	render() {

		return (

			<div className="box-body border-style">
				<form className="form-horizontal">
					<div className="form-group">

						<label className="control-label col-xs-4">유저 등급:</label>
						<div className="col-xs-8">
							<label className="control-label">
								3
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">이름:</label>
						<div className="col-xs-8">
							<label className="control-label">
								조용준
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">성별:</label>
						<div className="col-xs-8">
							<label className="control-label">
								남성
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">닉네임:</label>
						<div className="col-xs-8">
							<label className="control-label">
								마젠다
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">생년월일:</label>
						<div className="col-xs-8">

							<label className="control-label">
								19841129
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">이메일:</label>
						<div className="col-xs-8">
							<label className="control-label">
								junishop@gmail.com
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">유저상태:</label>
						<div className="col-xs-8">
							<label className="control-label">
								정상
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">보유 코인:</label>
						<div className="col-xs-8">
							<label className="control-label">
								100
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">보유 포인트:</label>
						<div className="col-xs-8">

							<label className="control-label">
								11
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">계정 생성일:</label>
						<div className="col-xs-8">
							<label className="control-label">
								2017-02-15 15:48:01
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">최종 로그아웃:</label>
						<div className="col-xs-8">
							<label className="control-label">
								2017-03-17 18:47:04
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


					<div className="form-group">
						<label className="control-label col-xs-4">유저 등급:</label>
						<div className="col-xs-8">

							<div className="input-group input-group-sm">
								<select className="form-control" value="3">
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
							<div className="form-group">
								<select className="form-control" value="3">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
							</div>

						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">이름:</label>
						<div className="col-xs-8">
							<input type="text" className="form-control" id="id" value="조용준" placeholder=""/>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">성별:</label>
						<div className="col-xs-8">
							<input type="text" className="form-control" id="id" value="남성" placeholder=""/>

						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">닉네임:</label>
						<div className="col-xs-8">
							<input type="text" className="form-control" id="id" value="마젠다" placeholder=""/>

						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">생년월일:</label>
						<div className="col-xs-8">
							<input type="text" className="form-control" id="id" value="19841129" placeholder=""/>

						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">이메일:</label>
						<div className="col-xs-8">
							<input type="text" className="form-control" id="id" value="junishop@gmail.com" placeholder=""/>

						</div>
					</div>

					<div className="form-group">
						<label className="control-label col-xs-4">유저상태:</label>
						<div className="col-xs-8">
							<div className="input-group input-group-sm">
								<select className="form-control" value="1">
									<option value="1">정상</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
								<span className="input-group-btn">
                      <button type="button" className="btn btn-success btn-flat">변경</button>
                    </span>
							</div>
							<div className="from-group">
								<select className="form-control" value="1">
									<option value="1">정상</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
							</div>

						</div>

					</div>

					<div className="form-group">
						<label className="control-label col-xs-4">보유 코인:</label>
						<div className="col-xs-8">
							<label className="control-label">
								100
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">보유 포인트:</label>
						<div className="col-xs-8">

							<label className="control-label">
								11
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">계정 생성일:</label>
						<div className="col-xs-8">
							<label className="control-label">
								2017-02-15 15:48:01
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-xs-4">최종 로그아웃:</label>
						<div className="col-xs-8">
							<label className="control-label">
								2017-03-17 18:47:04
							</label>
						</div>
					</div>

					<div className="form-group">
						<div className="col-sm-offset-4 col-xs-8">
							<button type="submit" className="btn btn-success">완료</button>
						</div>
					</div>
				</form>
			</div>


		);
	}

}

export default MemberContent;

