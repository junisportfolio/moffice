import React, { Component } from 'react';

class FilteringForm extends Component {
  render() {
    return (
      <div className="box-body border-style">

        <form className="form-horizontal" onSubmit={event => event.preventDefault()}>
          <div className="form-group">
            <label className="control-label col-xs-4">필터 전:</label>
            <div className="col-xs-8">
              <input type="text" className="form-control" onChange={this.props.type_word} value={this.props.filter_chat_word} />
            </div>

          </div>
          <div className="form-group">
            <label className="control-label col-xs-4">필터 후:</label>
            <div className="col-xs-8">
              <input type="text" className="form-control" onChange={this.props.type_replace} value={this.props.filter_chat_replace} />
            </div>
          </div>
          <div className="form-group">
            <button className="btn btn-success form-control" onClick={this.props.fnc_add}>등록</button>
          </div>
          <div className="form-group">
            <label className="control-label col-xs-4">캐시 생성:</label>
            <div className="col-xs-8">
              <button className="btn btn-primary form-control" onClick={this.props.fnc_confirm}>생성</button>
            </div>
          </div>
        </form>

      </div>
    );
  }
}

export default FilteringForm;