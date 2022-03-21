import React, { Component } from 'react';

export default class Room extends Component {
  componentDidMount = () => {
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = '/static/js/streams.js';
    document.body.appendChild(script);
    //script = document.createElement('script');
    //script.type = "text/javascript";
    //script.src = '/static/assets/AgoraRTC_N-4.8.0.js';
    //document.body.appendChild(script);
  }
  
  render() {
    return (
      <React.Fragment>
        <main>
          <section id="room-name-wrapper">
            <p>Room Name: <span id="room-name"></span></p>
          </section>

          <section id="video-streams"></section>

          <section id="controls-wrapper">
            <div className="icon-wrapper">
              <img className="control-icon" id="mic-btn" src="/static/images/microphone.svg" />
            </div>

            <div className="icon-wrapper">
              <img className="control-icon" id="camera-btn" src="/static/images/video.svg" />
            </div>

            <div className="icon-wrapper">
              <img className="control-icon" id="leave-btn" src="/static/images/leave.svg" />
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  }
}