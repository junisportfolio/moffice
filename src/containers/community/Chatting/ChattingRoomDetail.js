import React, { Component } from 'react';

class ChattingRoomDetail extends Component {
  render() {
    let info = this.props.room;

    return (
      <div className="box box-success">
        <div className="box-header with-border">
          <h3 className="box-title"><b>{info? info.broadcast_chat_name : ""}</b>의 방정보</h3>
        </div>
        <div className="box-body border-style">
          <form className="form-horizontal">
            <div className="form-group">
              <label className="control-label col-xs-4" htmlFor="grade">채팅방 번호:</label>
              <div className="col-xs-8">
                <label className="control-label">
                  {info? info.broadcast_idx : ""}
                </label>
              </div>
            </div>
            <div className="form-group">
              {/* TODO OnlyOneInput React Component 만들기 */}
              <label className="control-label col-xs-4" htmlFor="grade">채팅방 이름:</label>
              <div className="col-xs-8">
                <div className="input-group input-group-sm">
                  <label className="control-label">
                    {info? info.broadcast_chat_name : ""}
                  </label>
                  <span className="input-group-btn">
													<button type="button" className="btn btn-warning btn-flat">수정</button>
											</span>
                </div>
              </div>
              {/* END TODO */}

            </div>
            <div className="form-group">
              <label className="control-label col-xs-4" htmlFor="grade">채팅방 사이트:</label>
              <div className="col-xs-8">
                <label className="control-label">
                  {info? info.broadcast_chat_site : ""}
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-xs-4" htmlFor="id">채팅방 생성:</label>
              <div className="col-xs-8">
                <label className="control-label">
                  {info? info.broadcast_chat_registration_date : ""}
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-xs-4" htmlFor="id">채팅방 가상인원:</label>
              <div className="col-xs-8">

                <div className="input-group input-group-sm">
                  <label className="control-label">
                    {info? info.broadcast_chat_virtual_count : ""}
                  </label>
                  <span className="input-group-btn">
													<button type="button" className="btn btn-warning btn-flat">수정</button>
												</span>
                </div>

              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-xs-4" htmlFor="name">채팅방 공지:</label>
              <div className="col-xs-8">
                <label className="control-label">
                  {info? info.broadcast_chat_notice || "없음" : ""}
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-xs-4" htmlFor="nick">채팅방 채널:</label>
              <div className="col-xs-8">
                <label className="control-label">
                  {info? info.community_id : ""}
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-xs-4" htmlFor="grade">채팅방 주인장:</label>
              <div className="col-xs-8">
                <label className="control-label">
                  {info? info.user_nickname : ""}
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-xs-4" htmlFor="email">채팅방 매니져:</label>
              <div className="col-xs-8">
                {this.props.managers}
              </div>
            </div>
            {/* TODO 차단 목록 조회 API 요청 */}
            {/*<div className="form-group">
              <label className="control-label col-xs-4" htmlFor="email">채팅방 차단:</label>
              <div className="col-xs-8">
                <button className="btn btn-default">홍길동 <span className="badge">해제</span></button>
                <button className="btn btn-default">홍당무 <span className="badge">해제</span></button>
                <button className="btn btn-default">홍진경 <span className="badge">해제</span></button>
              </div>
            </div>*/}
            <div className="form-group">
              <label className="control-label col-xs-4" htmlFor="nick">채팅방 침묵:</label>
              <div className="col-xs-8">
                {this.props.silences}
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-xs-4" htmlFor="nick">사용자 전체 강퇴:</label>
              <div className="col-xs-8">
                <button className="btn btn-danger">전체 강퇴</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ChattingRoomDetail;