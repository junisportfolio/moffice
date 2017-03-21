import React, {Component} from 'react';
import PaginationContent from './PaginationContent';


class Pagination extends Component {

	constructor(props) {
		super(props);

	}

	render() {

		let page_content = "";
		if (typeof this.props.pagination === "object") {
			page_content = this.props.pagination.map(
				(list) => <PaginationContent

				/>
			)
		}

		return (
			<ul className="pagination">
				{page_content}

				<li className="active">
					<a>
						1
					</a>
				</li>
				<li>
					<a>
						2
					</a>
				</li>

			</ul>
		);
	}

}


export default Pagination;

