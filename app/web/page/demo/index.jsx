import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import DemoApp from './app.js'
import store from './store';

export default class ListIndex extends Component {
  componentDidMount() {
  }

  render() {
    return <Provider store={store}>
      <Fragment>
        <DemoApp />
      </Fragment>
    </Provider>
  }
}
