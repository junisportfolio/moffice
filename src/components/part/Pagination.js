import React, {Component} from 'react';
import PaginationContent from './PaginationContent';


class Pagination extends Component {

	constructor(props) {
		super(props);

	}

	render() {


		let limit = this.props.limit;
		let totalPage = this.props.total_page;
		let totalCount = this.props.total_count;
		let pageLimit = 9;
		let page = this.props.list_page;

		let currentPage = (Math.floor(page/pageLimit));
		if(currentPage < 0){
			currentPage = 0;
		}else if(currentPage > totalPage){
			currentPage = totalPage-1;
		}

		let pagination = [];
		for(let i = 0; i < totalPage; i++) {
			pagination.push(i);
		}

		let page_content = "";
		if (typeof pagination === "object") {
			page_content = pagination.map(
				(list, i) => {
					let index = i+1;
					if(i >= (currentPage*pageLimit) ){
						if(i < (currentPage+1)*pageLimit){

							if(index == page) {
								return (
									<li className="active">
										<a onClick={()=>this.props.handlePagination(index)}>
											{index}
										</a>
									</li>
								)
							}else{
								return (
									<li>
										<a onClick={()=>this.props.handlePagination(index)}>
											{index}
										</a>
									</li>
								)
							}
						}
					}
				}
			)
		}

		return (
			<ul className="pagination">
{/*
				<li>
					<a onClick={()=>this.props.handlePagination()}>
						&laquo;
					</a>
				</li>
				*/}
				{page_content}

				<li>
					<a onClick={()=>this.props.handlePagination()}>
						&raquo;
					</a>
				</li>
			</ul>
		);
	}

}


export default Pagination;

