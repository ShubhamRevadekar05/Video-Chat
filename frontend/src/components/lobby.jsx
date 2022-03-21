import React, { Component } from 'react';

export default class Lobby extends Component {
  componentDidMount = () => {
    var script = document.createElement('script');
    script.src = '/static/js/form.js';
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
        <main>
            <section id="form-container">
              <img src="/static/images/chat-icon.png"/>
                <div id="welcome-message">
                    <h1>Welcome to MyChat</h1>
                    <p>A group video calling platform made just for you!</p>
                </div>

                <form id="form">
                    <div className="field-wrapper">

                        <div className="form-field">
                            <label>Room:</label>
                            <input name="room" placeholder="Enter a room name..." style={{"text-transform": "uppercase"}}/>
                        </div>

                        <div className="form-field">
                            <label>Name:</label>
                            <input name="name" placeholder="Enter your name..." style={{"text-transform": "uppercase"}}/>
                        </div>

                        <div className="form-field">
                            <input type="submit" value="Join Stream" />
                        </div>
                    </div>
                </form>
            </section>
        </main>
    );
  }
}