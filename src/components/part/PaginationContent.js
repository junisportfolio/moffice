import React from 'react';

export default class PaginationContent extends React.Component {

	render() {
		return (
			<li>
				<a onClick={this.props.handleSelect}>
					{this.props.index}
				</a>
			</li>

		);
	}
}

