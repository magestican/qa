import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomePageData } from './../../../actions/homePage';
@connect(mapStateToProps)
export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(getHomePageData());
  }

  render() {
    return 'homepage'
  }
}

function mapStateToProps(state) {
  return {
    homePageData: state.homePageReducer.homePageData
  };
}
