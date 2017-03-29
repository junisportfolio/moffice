import React from 'react';

export default class ListPromotionContent extends React.Component {

	render() {

		return (
			<li className={"list-item-1 has-right" + (this.props.current_idx === this.props.promotion_coin_idx ? " active" : "")} onClick={this.props.handleSelect}>
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
