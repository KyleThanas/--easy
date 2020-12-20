import React, { Component } from 'react';
import { Provider } from 'react-redux';
import KeplerMapContainer from './widgets/keplerMap'
import store from './store/store';
import './index.css';

export default class ListIndex extends Component {
  render() {
    return <Provider store={store}>
      <KeplerMapContainer storeKepler={store} />
    </Provider>
  }
}
