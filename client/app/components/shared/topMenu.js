import React, { Component } from 'react';
import PAGES_ENUM from '../../helpers/constants/pagesEnum';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class TopMenu extends Component {
  constructor(props) {
    super(props);
  }

  getCurrentPage = () => {
    return document.location.pathname;
  }

  render() {
    return <Menu pointing secondary>
      <Menu.Item
        name='Home'
        active={this.getCurrentPage() === PAGES_ENUM.HOME}
      >
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item
        name='Faqs'
        active={this.getCurrentPage() === PAGES_ENUM.FAQ}
      >
        <Link to="/faqs">Faqs</Link>
      </Menu.Item>
    </Menu>
  }
}