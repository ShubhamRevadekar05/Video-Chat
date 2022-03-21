import React, { Component } from 'react';

export default class Room extends Component {
  componentDidMount = () => {
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = '/static/js/streams.js';
    document.body.appendChild(script);
  }
  
  render() {
    return (
      <React.Fragment>
          <section id="room-name-wrapper">
            <p>Room Name: <span id="room-name"></span></p>
          </section>

          <section id="video-streams"></section>

          <section id="controls-wrapper">
            <div className="icon-wrapper">
              <img className="control-icon" id="mic-btn" src="/static/images/microphone.svg" alt="Microphone" />
            </div>

            <div className="icon-wrapper">
              <img className="control-icon" id="camera-btn" src="/static/images/video.svg" alt="Video" />
            </div>

            <div className="icon-wrapper">
              <img className="control-icon" id="leave-btn" src="/static/images/leave.svg" alt="Leave" />
            </div>
          </section>
      </React.Fragment>
    );
  }
}