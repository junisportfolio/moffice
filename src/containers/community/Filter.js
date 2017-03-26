import React from 'react';
import PageHeader from '../../components/PageHeader';
import jasync from '../../jasync';
import ListFiltering from '../../components/part/ListFiltering';
import FilteringForm from '../../components/part/FilteringForm';

class Filter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "필터링관리",
      pageTitleName: "필터링",
      pageTitleNameSmall: "관리",

      limit: 10,
      list: '',
      list_Tcount: '',
      list_Tpage: '',
      list_page: 1,

			word: "",
			replace: "",

      filter_chat_word: "",
      filter_chat_replace: ""
    }

    this.inc = {
    	number: 0
    };
  }

  handleWord(event) {
  	this.setState({word: event.target.value});
	};

  handleReplace(event) {
  	this.setState({replace: event.target.value});
	};

  handlePagination(index) {
    this.setState({
      list_page: index
    }, () => {
      this.getFilterList();
    });
  }

  getFilterList() {
    let that = this;
    jasync.get({
      url: "/private/v1/settings/filter/chat",
      success: sss => that.setState({list: sss.list})
    });
  }

  addFiltereeWord() {
  	let that = this;

  	jasync.post({
  		url: "/private/v1/settings/filter/chat",
		  data: {
  			filter_chat_word: this.state.word,
				filter_chat_replace: this.state.replace
  		},
			success: sss => {
  			if(sss.result === "ok") {
  				alert(sss.message);
  				that.getFilterList();
  				that.setState({
            filter_chat_word: "",
            filter_chat_replace: ""
					});
				}
			},
			error: err => {
  			if(err.responseJSON.result === "err") {
  				alert(err.responseJSON.message);
				}
			}
		})
  }

  confirmFiltering() {
  	if(confirm("현재 등록된 채팅필터를 채팅서버에 적용하시겠습니까?")) {
      jasync.post({
        url: "/private/v1/settings/filter/chat/json_cache",
        success: sss => {
          if(sss.result === "ok") {
            alert(sss.message);
          }
        }
      });
		}
  }

  removeFiltereeWord(filter) {
  	if(confirm(`["${filter.filter_chat_word}" -> "${filter.filter_chat_replace}"]\n해당 채팅필터를 삭제하시겠습니까?`)){
      let that = this;
      let filter_chat_idx = filter.filter_chat_idx;

      jasync.delete({
        url: `/private/v1/settings/filter/chat/${filter_chat_idx}`,
        success: sss => {
          if(sss.result === "ok") {
            alert(sss.message);
						that.getFilterList();
          }
        }
      });
		}
  }

  componentDidMount() {
    this.getFilterList();
  }

  render() {

    return (
			<section className="content">
				<PageHeader
					pageTitle={this.state.pageTitle}
					pageTitleName={this.state.pageTitleName}
					pageTitleNameSmall={this.state.pageTitleNameSmall}
				/>

				<div className="row">
					<div className="col-md-8">
						<div className="box box-primary">
							<div className="box-header with-border">
								<h3 className="box-title"><b>필터링</b> 리스트</h3>
							</div>
							<div className="box-body">
								<ListFiltering list={this.state.list} fnc_remove={this.removeFiltereeWord.bind(this)} inc={this.inc} />
							</div>
              {/*<Pagination
							 limit={this.state.limit}
							 total_page={this.state.list_Tpage}
							 total_count={this.state.list_Tcount}
							 list_page={this.state.list_page}
							 handlePagination = {this.handlePagination}
							 />*/}
						</div>
					</div>
					<div className="col-md-4">
						<div className="box box-danger">
							<div className="box-header with-border">
								<h3 className="box-title"><b>필터링</b>단어 등록</h3>
							</div>
							<FilteringForm fnc_confirm={this.confirmFiltering.bind(this)} fnc_add={this.addFiltereeWord.bind(this)} input_word={this.state.filter_chat_word} input_replace={this.state.filter_chat_replace} type_word={this.handleWord.bind(this)} type_replace={this.handleReplace.bind(this)} />
						</div>
					</div>
				</div>
			</section>
    )
  }
}


export default Filter;