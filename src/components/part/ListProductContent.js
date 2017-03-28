import React from 'react';

export default class ListPromotionContent extends React.Component {

	render() {
		let listItem = {
			backgroundImage: 'url(http://image.mocobee.com' + this.props.product_image + ')',
		}

		return (
			<li>

				<div className={this.props.className}
						 style={listItem}
				>
				<span className="index">
					{ this.props.product_idx }
				</span>

					<table className="table ">
						<colgroup>
							<col width={'30%'}/>
							<col width={'70%'}/>
						</colgroup>
						<tbody>
						<tr>
							<th>
								상품명 :
							</th>
							<td>
								{ this.props.product_name }
							</td>
						</tr>
						<tr>
							<th>
								가격 :
							</th>
							<td>
								{ this.props.product_price } 원
							</td>
						</tr>
						<tr>
							<th>
								상태 :
							</th>
							<td>
								{ this.props.product_status }
							</td>
						</tr>
						<tr>
							<th>
								시퀸스 :
							</th>
							<td>
								{ this.props.product_sequence }
							</td>
						</tr>
						<tr>
							<th>
								생성일 :
							</th>
							<td className="small">
								{ this.props.product_point_registration_date }
							</td>
						</tr>
						<tr>
							<th></th>
							<td>
								<div className="btn-group">

									<button type="button"
													className="btn btn-warning"
													onClick={this.handleModify}
									>수정</button>
									<button type="button"
													className="btn btn-danger"
													onClick={this.handleModify}
									>삭제</button>
								</div>
							</td>
						</tr>
						</tbody>
					</table>
				</div>
			</li>

		);
	}
}
