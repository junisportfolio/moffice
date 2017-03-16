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

	render(){

		return(
			<div>
				<PageHeader
					pageTitle={this.state.pageTitle}
					pageTitleName={this.state.pageTitleName}
					pageTitleNameSmall={this.state.pageTitleNameSmall}
				/>
				<div className="row">
					<div className="col-md-6">
						<div className="box box-primary">
							<div className="box-header with-border">
								<h3 className="box-title">Quick Example</h3>
							</div>
							<div className="box-body">
								<ul>
									<li>aaa</li>
									<li>bbb</li>
									<li>ccc</li>
									<li>ddd</li>
									<li>eee</li>
								</ul>
							</div>

						</div>
					</div>

					<div className="col-md-6">
						<div className="box box-info">
							<div className="box-header with-border">
								<h3 className="box-title">Quick Example</h3>
							</div>
							<div className="box-body">
								<div className="form-group">
									<input type="text" className="form-control"/>
								</div>

							</div>

						</div>
					</div>
				</div>
			</div>
		)
	}
}


export default Board;


