import React, { Component } from 'react';

class SearchSelect extends Component {
  render() {
    let options = "";
    if(this.props.options) {
      options = this.props.options.map(option => (<option key={"option" + option.value} value={option.value}>{option.text}</option>));
    }

    return (
      <div className={"col-xs-" + this.props.widthRatio + " col-sm-" + this.props.widthRatio + " col-lg-" + this.props.widthRatio + " form-group form-group-sm"}>
        <select name="keyword_option"
                className="form-control"
                value={this.props.selectedOption}
                onChange={this.props.handleChange}>
          {options}
        </select>
      </div>
    );
  }
}

export default SearchSelect;