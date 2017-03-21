import React, {Component} from 'react';
import Dispatcher from './Dispatcher';
import Sitemap from './Sitemap';
import {
  Home,
  Login,
  NoMatch
} from './containers';
import maxios from './maxios';

class App extends Component {
  constructor() {
    super();

    let that = this;

    this.state = {
      isLoading: true,
      auth: {
        validate: false,
        user: null
      }
    };

    maxios.get({
      url: "/private/v1/auth",
      success: response => {
        let data = response.data;


        if(data.result === "ok") {
          that.setState({
            isLoading: false,
            auth: {
              validate: true,
              user: data.user
            }
          });
        }
      },
      error: response => {
        that.setState({
          isLoading: false,
          auth: {
            validate: false,
            user: null
          }
        });
      }
    });
  }

  render() {
    return (
      <Dispatcher sitemap={Sitemap} index={Home} security={Login} notfound={NoMatch} />
    );
  }
}

export default App;
