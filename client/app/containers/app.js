import React, { Component } from 'react';
import TopMenu from '../components/shared/topMenu';
import Routes from './routes'

export default class App extends Component {
  render() {
    return (<div className="app-container">
      <TopMenu />
      <Routes />
    </div>)
  }
}
