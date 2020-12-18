import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import KeplerMapContainer from './widgets/keplerMap'
import store from './store/store';

export default class ListIndex extends Component {
  render() {
    return <Provider store={store}>
      <Fragment>
        <div>123123</div>
        <KeplerMapContainer />
      </Fragment>
    </Provider>
  }
}
