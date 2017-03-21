import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Router, Route, Switch, Link } from 'react-router-dom';
import {
	BoxTitle,
	Button, Label,
	Input, InputGroup, InputGroupBtn,
	ListDefault,
	Pagination
} from '../../components/part/';
import ChannelContent from './ChannelContent';

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
										<li className="active" ><a href="#">Game</a></li>
										<li><a href="#">Indimusic</a></li>
										<li><a href="#">Talk</a></li>
									</ul>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="box box-primary">
							<div className="box-header with-border">

								<ul className="nav nav-tabs nav-justified">
									<li className="active" ><a href="#">All</a></li>
									<li><a href="#">BJ</a></li>
								</ul>

							</div>
							<div className="box-body">

								<InputGroup>
									<Input
										type="text"
										className=""
										placeholder="검색어를 입력하세요"
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
						<div className="box box-success">
							<div className="box-header with-border">

								<BoxTitle
									className="box-title"
									mainTitle="홍길동"
									subTitle="님의 정보"
								/>

							</div>

							<ChannelContent

							/>


						</div>


					</div>
				</div>

			</section>
		)
	}
}


export default Channel;