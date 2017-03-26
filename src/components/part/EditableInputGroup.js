import React, { Component } from 'react';

class EditableInputGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit_mode: false
    }
  }

  toggleEditStatus() {
    this.setState({edit_mode : !this.state.edit_mode});
  }

  render() {
    let button = "";

    if(this.state.edit_mode) {
      button = [
        <button key="editable_input_button0" type="button" className="btn btn-success btn-flat" onClick={this.props.func.bind(this)}>변경</button>,
        <button key="editable_input_button1" type="button" className="btn btn-danger btn-flat" onClick={this.toggleEditStatus.bind(this)}>취소</button>
      ];
    } else {
      button = <button key="editable_input_button2" type="button" className="btn btn-warning btn-flat" onClick={this.toggleEditStatus.bind(this)}>수정</button>;
    }

    return (
      <div className="form-group">
        <label className="control-label col-xs-4" for="id">{this.props.field_name}</label>
        <div className="col-xs-8">
          <div className="input-group input-group-sm">
            {this.state.edit_mode? this.props.input : this.props.children}
            <span className="input-group-btn">
              {button}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default EditableInputGroup;