import React, { Component } from 'react';
import TopMenu from '../components/shared/topMenu';
import Routes from './routes'

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div className="app-container">
      <TopMenu />
      <Routes />
      <div className="ui footer segment">
        Test for Qantas by Bryan Arbelo
      </div>
    </div>)
  }
}
