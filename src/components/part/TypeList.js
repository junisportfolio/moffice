import React, {Component} from 'react';


class TypeList extends Component {

	constructor(props) {
		super(props);

	}

	render() {

		let listChannel = "";
		if (typeof this.props.list === "object") {
			listChannel = this.props.list.map(
				(list, i) => {
					if(this.props.listTypeIndex == i){
						return <TypeListContent
							index={i}
							id={list.id}
							name={list.name}
							className='active'
							handleListType={this.props.handleListType}
						/>
					}else{
						return <TypeListContent
							index={i}
							id={list.id}
							name={list.name}
							className=''
							handleListType={this.props.handleListType}
						/>
					}

				}
			)
		}

		return (
			<div className="box-header">
				<ul className="nav nav-tabs nav-justified">
					{listChannel}

				</ul>
			</div>
		);
	}

}

class TypeListContent extends React.Component {
	render() {
		return(
			<li className={this.props.className}>
				<a href="#" onClick={()=> this.props.handleListType(this.props.index, this.props.id)}>
					{this.props.name}
				</a>
			</li>
		)
	}
}


export default TypeList;

