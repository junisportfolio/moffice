import React from 'react';

export default class ListPromotionContent extends React.Component {

	render() {

		return (
			<li className="list-item-1 has-right" onClick={this.props.handleSelect}>
				<a>
					<span className="title">
						{this.props.promotion_name}
					</span>
					<span className="text">
						{this.props.promotion_coin} 꿀
					</span>
					<span className="right">
						{this.props.promotion_count}
					</span>
				</a>
			</li>
		);
	}
}
