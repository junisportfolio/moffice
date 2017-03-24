import React, {Component} from 'react';


class TypeNav extends Component {

	constructor(props) {
		super(props);

	}

	render() {

		let ListContent = "";
		if (typeof this.props.content === "object") {
			ListContent = this.props.content.map(
				(list, i) => {
					if (this.props.index == i) {
						return <ChannelNavContent
							index={i}
							id={list.id}
							name={list.name}
							className="active"
							events={this.props.events}
						/>
					} else {
						return <ChannelNavContent
							index={i}
							id={list.id}
							name={list.name}
							events={this.props.events}
						/>
					}


				}
			)
		}

		return (
			<ul className="nav nav-tabs nav-justified">
				{ListContent}
			</ul>
		);
	}

}

class ChannelNavContent extends React.Component {
	render() {
		return (
			<li className={this.props.className}>
				<a href="#" onClick={() => this.props.events(this.props.index, this.props.id)}>
					{this.props.name}
				</a>
			</li>
		)
	}
}


export default TypeNav;

