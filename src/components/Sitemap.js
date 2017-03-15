import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'

const menuJson = [
	{
		id: "community",
		name: "커뮤니티 관리",
		icon: "fa-users",
		children: [
			{
				id: "member",
				name: "회원 관리",
				icon: ""
			}, {
				id: "channel",
				name: "채널 관리",
				icon: ""
			}, {
				id: "board",
				name: "게시판 관리",
				icon: ""
			}, {
				id: "chatting",
				name: "채팅방 관리",
				icon: "fa-comments"
			}, {
				id: "filter",
				name: "필터링 단어 관리",
				icon: ""
			}
		]
	}, {
		id: "broadcast",
		name: "방송국 관리",
		icon: "fa-wifi",
		children: [
			{
				id: "broad_tool",
				name: "방송 관리",
				icon: ""
			}, {
				id: "broad_code",
				name: "방송 코드 관리",
				icon: ""
			}
		]
	}, {
		id: "business",
		name: "비즈니스 관리",
		icon: "fa-krw",
		children: [
			{
				id: "promotion",
				name: "프로모션 관리",
				icon: ""
			}, {
				id: "coin",
				name: "꿀 이력 관리",
				icon: ""
			}, {
				id: "exchange",
				name: "환전 관리",
				icon: ""
			}, {
				id: "product",
				name: "상품 관리",
				icon: ""
			}, {
				id: "cash",
				name: "결제 관리",
				icon: ""
			}
		]
	}, {
		id: "customer",
		name: "고객지원 관리",
		icon: "fa-question"
	}
];

const childrenIdentifier = {
	value: 0
};

class Navigation extends Component {
	constructor() {
		super();

		this.state = {
			display: true
		}

		this.menuJson = menuJson;
		this.menuMarkup = [];
		this.menu = this.generateMenuMarkups();
	}

	generateMenuMarkups() {
		let displayStyle = (this.state.display) ? "display: block" : "display: none";
		let that = this;

		this.menuJson.map((depth1, i) => {
			if (depth1.children) {
				let children = [];

				depth1.children.map((depth2, j) => {
					children.push(that.generateMenuEntity(depth2, j));

					return false;
				});

				this.menuMarkup.push(that.generateMenuEntity(depth1, i, children));
			} else {
				this.menuMarkup.push(that.generateMenuEntity(depth1, i));
			}

			return false;
		});

		return <ul key="sidebar-wrap" className="sidebar-menu">
      {this.menuMarkup}
		</ul>;
	}

	generateMenuEntity(object, idx , children) {

		if (children) {
			return <MenuEntity
				key={childrenIdentifier.value++}
				name={object.name}
				id={object.id}
				children={children}
				icon={object.icon}
			/>;
		} else {
			return <MenuEntity
				key={childrenIdentifier.value++}
				name={object.name}
				id={object.id}
				icon={object.icon}
			/>;
		}
	}

	render() {
		return this.menu;
	}
}

class MenuEntity extends Component {
	constructor() {
		super();

		this.state = {
			isParent: true,
			hiddenChildren: true
		};
	}

	componentDidMount() {
	}

	render() {
		let childrenDisplay = (this.state.hiddenChildren) ? {display: "none"} : {display: "block"};
		let children = (this.props.children) ? <ul key={childrenIdentifier.value++} className="treeview-menu">{this.props.children}</ul> : "";
		let parentBracket = (this.state.isParent) ? (this.state.hiddenChildren) ?
				<i key={childrenIdentifier.value++} className="fa fa-plus-circle" aria-hidden="true"></i> :
				<i key={childrenIdentifier.value++} className="fa fa-minus-circle" aria-hidden="true"></i> : "";
		let menuIcon = (this.props.icon) ? <i key={childrenIdentifier.value++} className={"fa " + this.props.icon} aria-hidden="true"></i> :
			<i key={childrenIdentifier.value++} className={"fa " + "fa-circle-o"} aria-hidden="true"></i>;
		let onClickFunction = function () {
			this.setState({hiddenChildren: !this.state.hiddenChildren});
		};

		if (this.props.children) {
			return (
				<CustomTag
					key={childrenIdentifier.value++}
					activeOnlyWhenExact={true}
					to={this.props.id}
					label={this.props.name}
					kids={children}
					menuIcon={menuIcon}
					classNaming="treeview"
				/>
			);
		} else {
			return (
				<CustomTag
					key={childrenIdentifier.value++}
					activeOnlyWhenExact={false}
					to={this.props.id}
					label={this.props.name}
					menuIcon={menuIcon}
					classNaming=""
				/>
			);
			/*
			 <li>
			 <Link to=
			 onClick={onClickFunction.bind(this)}>{menuIcon}<span>{this.props.name}</span>{parentBracket}</Link>
			 {children}
			 </li>
			 */
		}
	}
}


const CustomTag = ({activeOnlyWhenExact, to, label, kids, menuIcon, classNaming}) => (
	<Route key={childrenIdentifier.value++} path={to} exact={activeOnlyWhenExact} children={({match}) => (
		<li key={childrenIdentifier.value++} className={match ? '${classNaming} active' : classNaming}>
			<Link key={childrenIdentifier.value++} to={to}>
				{menuIcon}
				<span key={childrenIdentifier.value++}>{label}</span>
			</Link>
			{kids}
		</li>
	)}/>
)



export default Navigation;