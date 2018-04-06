import * as React from 'react';
import './EventReplayForm.css';

export default class EventReplayForm extends React.Component {
  onSubmit() {

  }

  render() {
    return (
      <React.Fragment>
        <form className="replay-form-container">
          <p >
            Enter event messageID and hit replay.
          </p>
          <div className="input-container-group">
            <div className="input-container">
              <input
                type="text"
                placeholder="messageID"
                title="Enter Message ID."
                className="input"
              />
            </div>
            <div className="input-container">
              <button title="Replay" className="button button-bordered button-text elevation-2" type="submit">
                Replay
            </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
