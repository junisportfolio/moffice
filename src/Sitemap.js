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

class Navigation extends Component {
	constructor() {
		super();

		this.state = {
			display: true

		}

		this.menuJson = menuJson;
		this.menuMarkup = [];
		window.ddd = menuJson;
	}

	generateMenuMarkups() {
		let displayStyle = (this.state.display) ? "display: block" : "display: none";
		let that = this;

		this.menuJson.map((depth1, i) => {
			if (depth1.children) {
				let children = [];

				depth1.children.map((depth2, i) => {
					children.push(that.generateMenuEntity(depth2, i));

					return false;
				});

				this.menuMarkup.push(that.generateMenuEntity(depth1, i, children));
			} else {
				this.menuMarkup.push(that.generateMenuEntity(depth1, i));
			}

			return false;
		});

		let temp =
			<ul className="sidebar-menu">
				{this.menuMarkup}
			</ul>

		return temp;
	}

	generateMenuEntity(object, i , children) {
		if (children) {
			return <MenuEntity
				key={i}
				name={object.name}
				id={object.id}
				children={object.children}
				icon={object.icon}
			>
				{children}
			</MenuEntity>;
		} else {
			return <MenuEntity
				key={object.name+i}
				name={object.name}
				id={object.id}
				children={object.children}
				icon={object.icon}
			/>;
		}
	}

	render() {
		return this.generateMenuMarkups();
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
		let children = (this.props.children) ? <ul className="treeview-menu">{this.props.children}</ul> : "";
		let parentBracket = (this.state.isParent) ? (this.state.hiddenChildren) ?
				<i className="fa fa-plus-circle" aria-hidden="true"></i> :
				<i className="fa fa-minus-circle" aria-hidden="true"></i> : "";
		let menuIcon = (this.props.icon) ? <i className={"fa " + this.props.icon} aria-hidden="true"></i> :
			<i className={"fa " + "fa-circle-o"} aria-hidden="true"></i>;
		let onClickFunction = function () {
			this.setState({hiddenChildren: !this.state.hiddenChildren});
		};

		if (this.props.children) {
			return (
				<CustomTag
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
					to={this.props.id}
					label={this.props.name}
					kids={children}
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
	<Route path={to} exact={activeOnlyWhenExact} children={({match}) => (
		<li className={match ? `${classNaming} active` : classNaming}>
			<Link to={to}>
				{menuIcon}
				<span>{label}</span>
			</Link>
			{kids}
		</li>
	)}/>
)



export default Navigation;