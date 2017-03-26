import React, { Component } from 'react';

class ListFilteringContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
    	validate: true
		};
  }

  render() {
  	if(this.state.validate) {
      return (
				<li className="list-group-item">
					<div className="input-group input-group-sm">
						<div className="trans-content">
						<span className="btn btn-warning btn-flat fll">
							{this.props.filter.filter_chat_word}
						</span>
							<span className="btn btn-primary btn-flat flr">
							{this.props.filter.filter_chat_replace}
						</span>
						</div>
						<span className="input-group-btn">
						<button className="btn btn-danger" onClick={() => this.props.fnc_remove(this.props.filter)}>
							삭제
						</button>
					</span>
					</div>
				</li>
      );
		} else {
  		return (
  			<span></span>
			);
		}
  }
}

export default ListFilteringContent;