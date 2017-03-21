import React from 'react';
import PageHeader from '../../components/PageHeader';
import {
	BoxTitle,
	Button, Label,
	Input, InputGroup, InputGroupBtn,
	ListDefault,
	Pagination
} from '../../components/part/';
import MemberContent from './MemberContent'


class Member extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "회원관리",
			pageTitleName: "회원",
			pageTitleNameSmall: "관리",
			board: ''


		}
	}

	render(){

		return(
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

								<BoxTitle
									className="box-title"
									mainTitle="메인"
									subTitle="리스트"
								/>

							</div>
							<div className="box-body">

								<InputGroup>
									<Input
										type="text"
										className=""
										placeholder="검색어를 입력하세요"
										value=""
									/>
									<InputGroupBtn>
										<Button
											type="button"
											className="btn btn-success btn-flat"
											name="검색"
										/>
									</InputGroupBtn>
								</InputGroup>

								<ListDefault
									list={this.state.board}
								/>

							</div>
							<div className="box-footer">

								<Pagination
									pagination=""
								/>

							</div>
						</div>
					</div>

					<div className="col-md-6">
						<div className="box box-success">
							<div className="box-header with-border">

								<BoxTitle
									className="box-title"
									mainTitle="홍길동"
									subTitle="님의 정보"
								/>

							</div>

							<MemberContent

							/>

						</div>


					</div>
				</div>

			</section>
		)
	}
}


export default Member;



