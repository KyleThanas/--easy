import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import KeplerMapContainer from './widgets/keplerMap'
import store from './store/store';
import './index.css';

export default class ListIndex extends Component {
  componentDidMount() {
    console.log('----componentDidMount-----');
  }

  render() {
    return <Fragment>
      <Provider store={store}>
        <KeplerMapContainer />
      </Provider>
    </Fragment>
  }
}
