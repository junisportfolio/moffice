import React, {Component} from 'react';


class BoardContent extends Component {

	constructor(props) {
		super(props);

	}

	render() {

		return (
			<table className="table-board">
				<colgroup>
					<col width={'20%'}/>
					<col width={'30%'}/>
					<col width={'20%'}/>
					<col width={'30%'}/>
				</colgroup>
				<thead>
				<tr>
					<th>게시글 제목</th>
					<td colSpan="3" className="text-left">adkjwkf lwkdlkwldk l wl dklwkdl kawl kd lawkd lkaw ldk awk
						dlkalwkd lawk dlk awlkd lakw dlkaw ldk lakwfadkjwkf lwkdlkwldk l wl dklwkdl kawl kd lawkd lkaw
						ldk awk dlkalwkd lawk dlk awlkd lakw dlkaw ldk lakwf
					</td>
				</tr>
				<tr>
					<th>작성자</th>
					<td>홍길동</td>
					<th>등록일</th>
					<td>2017.02.15</td>
				</tr>
				<tr>
					<th>조회수</th>
					<td>test4</td>
					<th>추천</th>
					<td>232</td>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td colSpan="4" className="content-area">
						<p>asdmnasbdmjnsajn</p>
						<p>asdmnasbdmjnsajn</p>
						<img src="http://placehold.it/350x150" alt=""/>
						<p>asdmnasbdmjnsajn</p>
					</td>
				</tr>
				</tbody>

			</table>
		);
	}

}

export default BoardContent;






































