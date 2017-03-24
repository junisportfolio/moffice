import React, {Component} from 'react';


class ChannelNav extends Component {

	constructor(props) {
		super(props);

	}

	render() {

		let listChannel = "";
		if (typeof this.props.community === "object") {
			listChannel = this.props.community.map(
				(list, i) => {
					if(this.props.channel_index == i){
						return <ChannelNavContent
							community_index={i}
							community_id={list.community_id}
							community_name={list.community_name}
							community_color={list.community_color}
							community_bg_image={list.community_bg_image}
							className='active'
							handleChannel={this.props.handleChannel}
						/>
					}else{
						return <ChannelNavContent
							community_index={i}
							community_id={list.community_id}
							community_name={list.community_name}
							community_color={list.community_color}
							community_bg_image={list.community_bg_image}
							handleChannel={this.props.handleChannel}
						/>
					}



				}
			)
		}

		return (
			<div className="box-header">
				<ul className="nav nav-pills nav-justified">
					{listChannel}
				</ul>
			</div>
		);
	}

}

class ChannelNavContent extends React.Component {
	render() {
		return(
			<li className={this.props.className}>
				<a href="#" onClick={()=> this.props.handleChannel(this.props.community_index, this.props.community_id)}>
					{this.props.community_name}
				</a>
			</li>
		)
	}
}


export default ChannelNav;

