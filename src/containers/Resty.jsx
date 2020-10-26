import React, { Component } from 'react';
import UrlInput from '../components/url/UrlInput';
import Header from '../components/app/Header';
import Buttons from '../components/app/buttons/Buttons';
import request from 'superagent';
import Output from '../components/app/output/Output';

export default class Resty extends Component {
  state = {
    url: '',
    requestType: 'get',
    results: '',
    text: '',
    history: []
  }

  handleUrlChange = ({ target }) => {
    this.setState({
      url: target.value
    });
  }

  handleRequestChange = ({ target }) => {
    this.setState({
      request: target.value
    });
  }

  handleTextChange = ({ target }) => {
    this.setState({
      text: target.value
    });
    console.log(this.state.text);
  }

  makeRequest = async() => {
    if(this.state.request === 'GET') {
      const data = await request.get(`${this.state.url}`);
      const parsedData = JSON.stringify(data.body);
      this.setState({
        results: parsedData
      });
      this.setState({ history: this.state.history.push(this.state.url) });
    }
    else if(this.state.request === 'POST') {
      request.post(`${this.state.url}`)
        .set('Content-Type', 'application/json')
        .type('form')
        .send(this.state.text)
        .then(res => this.setState({ results: res.body }));
      this.setState({ history: this.state.history.push(this.state.url) });
    }
  }

  render() {
    const { results } = this.state;

    return (
      <div>
        <Header />
        <UrlInput 
          onChange={this.handleUrlChange}
          onClick={this.makeRequest}  />
        <Buttons 
          onChange={this.handleRequestChange} 
          onTextChange={this.handleTextChange}
        />
        <Output
          results={results}
        />
      </div>
    );
  }
}
