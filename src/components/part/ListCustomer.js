import React, {Component} from 'react';
import ListCustomerContent from './ListCustomerContent';

class ListCustomer extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let list_content = "";
		if (typeof this.props.list === "object") {
			list_content = this.props.list.map(
				(list, i) => {

					let type = '';
					if( list.customer_alliance_type ) {

						switch( list.customer_alliance_type ) {
							case 1:
								type = '광고';
								break;
							case 2:
								type = '사업';
								break;
							case 9:
								type = '기타';
								break;
							default:
								type = list.customer_alliance_type;
								break;
						}

					}else if( list.customer_claim_type ) {

						switch( list.customer_claim_type ) {
							case 1:
								type = '선정성';
								break;
							case 2:
								type = '개인정보침해';
								break;
							case 3:
								type = '저작권위반';
								break;
							case 4:
								type = '비매 신고';
								break;
							case 5:
								type = '불법 홍보';
								break;
							case 9:
								type = '기타 문의';
								break;
							default:
								type = list.customer_claim_type;
								break;
						}

					}else if( list.customer_question_type ) {

						switch( list.customer_question_type ) {
							case 1:
								type = '방송 문의';
								break;
							case 2:
								type = '계정 문의';
								break;
							case 3:
								type = '건의 문의';
								break;
							case 4:
								type = '결제 문의';
								break;
							case 5:
								type = '장애 문의';
								break;
							case 6:
								type = '이용 문의';
								break;
							case 9:
								type = '기타 문의';
								break;
							default:
								type = list.customer_question_type;
								break;
						}

					}



					let status = '';
					if( list.customer_alliance_status ) {

						switch( list.customer_alliance_status ) {
							case 1:
								status = '완료';
								break;
							case 2:
								status = '대기';
								break;
							default:
								status = list.customer_alliance_status;
								break;
						}

					}else if( list.customer_claim_status ) {

						switch( list.customer_claim_status ) {
							case 1:
								status = '완료';
								break;
							case 2:
								status = '대기';
								break;
							default:
								status = list.customer_claim_status;
								break;
						}

					}else if( list.customer_question_status ) {

						switch( list.customer_question_status ) {
							case 1:
								status = '완료';
								break;
							case 2:
								status = '대기';
								break;
							default:
								status = list.customer_question_status;
								break;
						}

					}


					let dataInfo = '';
					if( list.customer_alliance_idx ) {
						dataInfo = list.customer_alliance_idx;
					}else if( list.customer_claim_idx ) {
						dataInfo = list.customer_claim_idx;
					}else if( list.customer_question_idx ) {
						dataInfo = list.customer_question_idx;
					}

					let dataTitle = '';
					if( list.customer_alliance_subject ) {
						dataTitle = list.customer_alliance_subject;
					}else if( list.customer_claim_subject ) {
						dataTitle = list.customer_claim_subject;
					}else if( list.customer_question_subject ) {
						dataTitle = list.customer_question_subject;
					}

					let dataText = '';
					if( list.customer_alliance_idx ) {
						dataText = list.customer_alliance_type;
					}else if( list.customer_claim_idx ) {
						dataText = list.customer_claim_type;
					}else if( list.customer_question_idx ) {
						dataText = list.customer_question_type;
					}

					let dataRight = '';
					if( list.customer_alliance_idx ) {
						dataRight = list.customer_alliance_status;
					}else if( list.customer_claim_idx ) {
						dataRight = list.customer_claim_status;
					}else if( list.customer_question_idx ) {
						dataRight = list.customer_question_status;
					}

					return <ListCustomerContent

						current_idx={this.props.current_idx}
						customer_idx={list.customer_question_idx || list.customer_claim_idx || list.customer_alliance_idx}

						list_index={i}

						list_info = {dataInfo}

						dataTitle = {dataTitle}
						dataText = {type}
						dataRight = {status}

						handleSelect={() => this.props.handleSelect(dataInfo)}
					/>
				}
			)
		}

		return (
			<ul className="nav nav-stacked">
				{list_content}
			</ul>
		);
	}

}

export default ListCustomer;

