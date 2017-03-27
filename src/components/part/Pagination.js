import React, {Component} from 'react';
import PaginationContent from './PaginationContent';


class Pagination extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    let limit = this.props.limit; // 한 페이지당 몇 건?
    let totalPage = this.props.total_page; // 총 몇 페이지?
    let totalCount = this.props.total_count; // 총 몇 건?
    let pageLimit = 3; // 페이지네이션 영역에 한번에 몇 페이지씩 보여줄건지?
    let page = this.props.list_page; // 현재 몇페이지를 보고 있는지?
    let currentPage = Math.ceil(page / pageLimit); // 현재 몇번째 페이지네이션 그룹을 보고 있는지?
		
		// 페이지네이션 루프 제어 숫자
    let loop = []; // 현재 2쪽을 보고있고 한번에 7개씩 보여준다? => [7, 8, 9, 10, 11, 12, 13]
    for(let i = (currentPage - 1) * pageLimit; i < currentPage * pageLimit; i++) {
      loop.push(i);
    }

    // 현재 [7, 8, 9, 10, 11, 12, 13]로 루프를 돌기로 되어있고, 총 페이지 수가 11쪽이다? => [7, 8, 9, 10]
    let loop2 = loop.filter(num => num < totalPage);

    let pagination = "";
    pagination = loop2.map( // [<< ][ 8 ][ 9 ][ 10 ][ 11][ >>] 페이지 완성
      num => <li key={"pagination" + num} className={(num + 1 === page) ? "active" : ""}>
				<a onClick={()=>this.props.handlePagination(num + 1)}>
          {num + 1}
				</a>
			</li>
    );
    //
    // let currentPage = page;//(Math.floor(page/pageLimit));
    // if(currentPage < 0){
    // 	currentPage = 0;
    // }else if(currentPage > totalPage){
    {/*currentPage = totalPage-1;*/}
    {/*}*/}

    {/*let pagination = [];*/}
    {/*for(let i = 0; i < totalPage; i++) {*/}
    {/*pagination.push(i);*/}
    {/*}*/}

    {/*let page_content = "";*/}
    {/*if (typeof pagination === "object") {*/}
    {/*page_content = pagination.map(*/}
    {/*(list, i) => {*/}
    {/*let index = i+1;*/}
    {/*if(i >= (currentPage*pageLimit) ){*/}
    {/*if(i < (currentPage+1)*pageLimit){*/}

    {/*if(index == page) {*/}
    {/*return (*/}
    {/*<li className="active">*/}
    {/*<a onClick={()=>this.props.handlePagination(index)}>*/}
    {/*{index}*/}
    {/*</a>*/}
    {/*</li>*/}
    // 						)
    // 					}else{
    // 						return (
    // 							<li>
    // 								<a onClick={()=>this.props.handlePagination(index)}>
    // 									{index}
    // 								</a>
    // 							</li>
    // 						)
    // 					}
    // 				}
    // 			}
    // 		}
    // 	)
    // }

    let left = (currentPage > 1) ?
			<li>
				<a onClick={()=>this.props.handlePagination((page - pageLimit < 1) ? 1: page - pageLimit)}>
					&laquo;
				</a>
			</li>
      :
      "";

    let right = (currentPage < totalPage / pageLimit) ?
			<li>
				<a onClick={()=>this.props.handlePagination((page + pageLimit > totalPage) ? totalPage: page + pageLimit)}>
					&raquo;
				</a>
			</li>
      :
      "";

    return (
			<ul className="pagination">
        {left}
        {pagination}
        {right}
			</ul>
    );
  }

}


export default Pagination;

