import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFaqPageData } from './../../../actions/faqPage';
@connect(mapStateToProps)
export default class FaqPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(getFaqPageData());
  }

  render() {
    return 'index'

  }
}

function mapStateToProps(state) {
  return {
    faqPageData: state.faqPageReducer.faqPageData
  };
}
