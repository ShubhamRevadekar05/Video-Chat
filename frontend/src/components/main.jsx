import React, { Component } from 'react';

class Main extends Component {
  componentDidMount() {
    var script = document.createElement("script");
    script.src = '/static/js/main.js';
    script.async = true;
    document.head.appendChild(script);
  }
  render() {
    return (
      <head>
        <meta charset='utf-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <title>MyChat</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
    );
  }
}

export default Main;