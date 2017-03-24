import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ChattingRoomList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let navigators = [];

    for(let i = 1; i <= this.props.totalPage; i++) {
      navigators.push(<li key={"room" + i + "page"} className={(this.props.owner.state.roomPage === i) ? "active": ""} onClick={() => this.props.search(i)}><Link to="#">{i}</Link></li>);
    }

    return (
      <div className="col-md-4">
        <div className="box box-primary">
          <div className="box-header with-border"></div>
          <div className="box-body">
            <div className="input-group input-group-sm">
              <input type="text" className="form-control"/>
              <span className="input-group-btn">
              <button type="button" className="btn btn-primary btn-flat">검색</button>
            </span>
            </div>
            <ul className="nav nav-stacked">
              {this.props.rooms}
            </ul>
          </div>
          <div className="box-footer">
            <ul className="pagination">
              {/* TODO 페이지네이션*/}
              {navigators}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ChattingRoomList;