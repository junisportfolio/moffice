import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Navigation from '../Sitemap';


const Sidebar = () => (
	<aside className="main-sidebar">
		<section className="sidebar">

			<Navigation/>

			{/*


			<ul className="sidebar-menu">
				<li className="treeview">
					<Link refresh="true" to="#">
						<i className="fa fa-th"></i> <span>커뮤니티 관리</span>
						<span className="pull-right-container">
              <i className="fa fa-angle-down pull-right"></i>
            </span>
					</Link>
					<ul className="treeview-menu">
						<li> <Link refresh="true" to="/member"><i className="fa fa-circle-o"></i>회원 관리</Link></li>
						<li> <Link refresh="true" to="/channel"><i className="fa fa-circle-o"></i>채널 관리</Link></li>
						<li> <Link refresh="true" to="/board"><i className="fa fa-circle-o"></i>게시판 관리</Link></li>
						<li> <Link refresh="true" to="/chatting"><i className="fa fa-circle-o"></i>채팅방 관리</Link></li>
						<li> <Link refresh="true" to="/filter"><i className="fa fa-circle-o"></i>필터링 관리</Link></li>
					</ul>
				</li>
				<li className="treeview">
					<Link refresh="true" to="#">
						<i className="fa fa-laptop"></i> <span>방송국 관리</span>
						<span className="pull-right-container">
							<i className="fa fa-angle-down pull-right"></i>
						</span>
					</Link>
					<ul className="treeview-menu">
						<li> <Link refresh="true" to="broadcast"><i className="fa fa-circle-o"></i>방송 관리</Link></li>
						<li> <Link refresh="true" to="broadcast_code"><i className="fa fa-circle-o"></i>방송 코드 관리</Link></li>
					</ul>
				</li>
				<li className="treeview">
					<Link refresh="true" to="#">
						<i className="fa fa-edit"></i> <span>비즈니스 관리</span>
						<span className="pull-right-container">
                          <i className="fa fa-angle-down pull-right"></i>
                        </span>
					</Link>
					<ul className="treeview-menu">
						<li> <Link refresh="true" to="promotion"><i className="fa fa-circle-o"></i>프로모션 관리</Link></li>
						<li> <Link refresh="true" to="coin"><i className="fa fa-circle-o"></i>꿀 이력 관리</Link></li>
						<li> <Link refresh="true" to="exchange"><i className="fa fa-circle-o"></i>환전 관리</Link></li>
						<li> <Link refresh="true" to="product"><i className="fa fa-circle-o"></i>상품 관리</Link></li>
						<li> <Link refresh="true" to="cash"><i className="fa fa-circle-o"></i>결제 관리</Link></li>
					</ul>
				</li>
				<li> <Link refresh="true" to="customer"><i className="fa fa-envelope"></i> <span>고객지원</span></Link></li>
				<li> <Link refresh="true" to="mypage"><i className="fa fa-book"></i> <span>마이페이지</span></Link></li>

				*/}


				{/*
				<CustomTag activeOnlyWhenExact={true} to="/" label="Home"/>
				<CustomTag to="/about" label="About"/>


			</ul>
				 */}

		</section>
	</aside>

)
/*

const CustomTag = ({ label, to, activeOnlyWhenExact }) => (
	<Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
		<li className={match ? 'active' : ''}>
			<Link to={to} className={match ? 'active ' : ''}>{label}</Link>
			<ul>
				<CustomTag to="/about" label="About"/>
			</ul>
		</li>
	)}/>
)
*/

export default Sidebar;












