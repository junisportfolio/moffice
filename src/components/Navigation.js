import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import Sitemap from '../Sitemap';

const childrenIdentifier = {
	value: 0
};

class Navigation extends Component {
	constructor() {
		super();

		this.menus = [];
		this.generateMenuMarkups();
	}

	generateMenuMarkups() {
		let that = this;

		Sitemap.structure.map((depth1, i) => {
			if (depth1.children) {
				let children = [];

				depth1.children.map((depth2, j) => {
					children.push(that.generateMenuEntity(depth2, j));

					return false;
				});

				this.menus.push(that.generateMenuEntity(depth1, i, children));
			} else {
				this.menus.push(that.generateMenuEntity(depth1, i));
			}
		});
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
    return (
			<ul key="sidebar-wrap" className="sidebar-menu">
        {this.menus}
			</ul>
		);
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
					to={"#" + this.props.id}
					label={this.props.name}
					kids={children}
					menuIcon={menuIcon}
					classNaming="treeview"
				/>
			);
		} else {
			return (
				<CustomTag
					activeOnlyWhenExact={false}
					to={this.props.id}
					label={this.props.name}
					menuIcon={menuIcon}
					classNaming=""
				/>
			);
		}
	}
}

const CustomTag = ({activeOnlyWhenExact, to, label, kids, menuIcon, classNaming}) => (
	<Route path={to} exact={activeOnlyWhenExact} children={({match}) => (
		<li className={match ? '${classNaming} active' : classNaming}>
			<Link to={to}>
				{menuIcon}
				<span>{label}</span>
			</Link>
			{kids}
		</li>
	)}/>
);

export default Navigation;