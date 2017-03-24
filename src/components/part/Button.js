import React, {Component} from 'react';

class Button extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		return (
			<button type={this.props.type} className={this.props.className} onClick={this.props.handleSearch}>
				{this.props.name}
			</button>
		);
	}

}

export default Button;

