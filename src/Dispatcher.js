import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Sitemap from './Sitemap';
import { Header, Sidebar } from './components';
import {
  Home,
  Login,
  NoMatch
} from './containers';

class Dispatcher extends Component {
  constructor() {
    super();

    this.sitemap = Sitemap;
    this.index = Home;
    this.security = Login;
    this.notfound = NoMatch;
    this.routes = [];
    this.state = {
      auth: {
        validate: false,
        user: null
      }
    };

    this.parseRoutes();
  }

  componentDidMount() {
    if(this.props.sitemap) this.sitemap = this.props.sitemap;
    if(this.props.index) this.index = this.props.index;
    if(this.props.security) this.security = this.props.security;
    if(this.props.notfound) this.notfound = this.props.notfound;
    if(this.props.auth) this.setState({auth: this.props.auth});
  }

  parseRoutes() {
    window.sitemap = Sitemap;
    Sitemap.structure.map(parent => {
      if(parent.children) {
        parent.children.map(children => {
          this.routes.push(<Route key={children.id} path={"/" + children.id} component={this.index} />);
        });
      } else {
        this.routes.push(<Route key={parent.id} path={"/" + parent.id} component={this.index} />);
      }
    });
  }

  render() {
    let innerSwitch = "";

    if(this.state.auth.validate) {
      window.document.body.className = "skin-black";

      innerSwitch =
        <Switch>
          <Route exact path="/" component={this.index} />
          {this.routes}
          <Route component={this.notfound} />
        </Switch>;
    } else {
      window.document.body.className = "skin-black sidebar-collapse";

      innerSwitch =
        <Switch>
          <Route path="/" component={this.security} />
          <Route path="/login" component={this.security} />
        </Switch>;
    }

    return (
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          {innerSwitch}
        </div>
      </div>
    );
  }
}

export default Dispatcher;