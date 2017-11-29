import React from 'react';
import PropTypes from 'prop-types';

import './styles/index.css';

export default class App extends React.Component {
  state = {
    name: 'React'
  }

  static propTypes = {
    appName: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {appName} = this.props;
    return (
      <div>
        I am {this.state.name} {appName}
      </div>
    )
  }
}
