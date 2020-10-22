import React, { Component } from 'react';
import UrlInput from '../components/url/UrlInput';
import Header from '../components/app/Header';
import Buttons from '../components/app/buttons/Buttons';


export default class Resty extends Component {
  state = {
    url: '',
    requestType: 'get',
    results: ''
  }

  handleUrlChange = ({ target }) => {
    this.setState({
      url: target.value
    });
    console.log(this.state.url);
  }

  handleRequestChange = ({ target }) => {
    this.setState({
      request: target.value
    });
  }



  render() {
    return (
      <div>
        <Header />
        <UrlInput onChange={this.handleUrlChange} />
        <Buttons onChange={this.handleRequestChange} />
      </div>
    );
  }
}
