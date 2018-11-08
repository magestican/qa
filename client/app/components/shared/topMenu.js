import React, { Component } from 'react';
import PAGES_ENUM from '../../helpers/constants/pagesEnum';
import { Menu } from 'semantic-ui-react';

export default class TopMenu extends Component {
  constructor(props) {
    super(props);
  }

  goToHome = () => {
    window.location.replace('/')
  }

  goToFaq = () => {
    window.location.replace('/faqs')
  }

  getCurrentPage = () => {
    return document.location.pathname;
  }

  render() {
    return <Menu pointing>
      <Menu.Item
        name='Home'
        active={this.getCurrentPage() === PAGES_ENUM.HOME}
        onClick={this.goToHome}
      />
      <Menu.Item
        name='Faqs'
        active={this.getCurrentPage() === PAGES_ENUM.FAQ}
        onClick={this.goToFaq}
      />
    </Menu>
  }
}