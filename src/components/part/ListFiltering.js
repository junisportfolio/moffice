import React, { Component } from 'react';
import ListFilteringContent from './ListFilteringContent';

class ListFiltering extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let list = "";

    if(this.props.list) {
      list = this.props.list.map(filter => (<ListFilteringContent key={"filtering" + this.props.inc.number++} filter={filter} fnc_remove={this.props.fnc_remove} />));
    }

    return (
      <ul className="list-group">
        {list}
      </ul>
    );
  }
}

export default ListFiltering;