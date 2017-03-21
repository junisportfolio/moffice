import React, {Component} from 'react';

class Button extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		return (
			<input type={this.props.type} className="form-control" value={this.props.value} placeholder={this.props.placeholder}/>
		);
	}

}

export default Button;

