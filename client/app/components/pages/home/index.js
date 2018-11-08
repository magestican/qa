import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomePageData } from './../../../actions/homePage';
import { Header, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

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
    const { homePageData: { homepage: { heading, subheading, heroImageUrl } } } = this.props;
    return (
      <div className="home-page">
        <Header as="h2" icon>
          <Icon name="car" />
          {heading}
          <Header.Subheader>{subheading}</Header.Subheader>
        </Header>
        <div className="learn-more">
          <Link to="/faqs">Learn more</Link>
        </div>
        <Image centered circular size="large" src={heroImageUrl} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    homePageData: state.homePageReducer.homePageData
  };
}
