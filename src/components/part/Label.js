import React, {Component} from 'react';

class Label extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		return (
			<label className={this.props.className} for={this.props.for}>{this.props.name}</label>
		);
	}

}

export default Label;

