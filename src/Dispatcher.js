import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Sitemap from './Sitemap';
import {
  Home,
  NoMatch
} from './containers';

class Dispatcher extends Component {
  constructor() {
    super();
    this.routes = [];
    this.parseRoutes();
  }

  parseRoutes() {
    window.sitemap = Sitemap;
    Sitemap.structure.map(parent => {
      if(parent.children) {
        parent.children.map(children => {
          this.routes.push(<Route key={children.id} path={children.path} component={children.content} />);

          return true;
        });
      } else {
        this.routes.push(<Route key={parent.id} path={parent.path} component={parent.content} />);
      }

      return true;
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        {this.routes}
        <Route component={NoMatch}/>
      </Switch>
    );
  }
}

export default Dispatcher;