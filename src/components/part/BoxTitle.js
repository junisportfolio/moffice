import React, {Component} from 'react';

class BoxTitle extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		return (
			<h3 className={this.props.className}>
				<b>
					{this.props.mainTitle}
				</b>
				{this.props.subTitle}
			</h3>
		);
	}

}

export default BoxTitle;

