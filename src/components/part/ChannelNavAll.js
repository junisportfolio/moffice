import React, {Component} from 'react';


class ChannelNavAll extends Component {

	constructor(props) {
		super(props);

	}

	render() {

		let listChannel = "";
		if (typeof this.props.community === "object") {
			listChannel = this.props.community.map(
				(list, i) => {
					if(this.props.channel_index == i){
						return <ChannelNavAllContent
							community_index={i}
							community_id={list.community_id}
							community_name={list.community_name}
							community_color={list.community_color}
							community_bg_image={list.community_bg_image}
							className='active'
							handleChannel={this.props.handleChannel}
						/>
					}else{
						return <ChannelNavAllContent
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
					<li className={this.props.channel_index == 9 ? 'active':''}>
						<a href="#" onClick={()=> this.props.handleChannel(9, '')}>
							All
						</a>
					</li>
					{listChannel}
				</ul>
			</div>
		);
	}

}

class ChannelNavAllContent extends React.Component {
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


export default ChannelNavAll;

