import * as React from 'react';

import { replayEvent } from 'services';

import IEventReplayFormState from './IEventReplayFormState';
import './EventReplayForm.css';

export default class EventReplayForm extends React.Component<{}, IEventReplayFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      messageID: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    replayEvent(this.state.messageID);
    e.preventDefault();
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ messageID: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <form className="replay-form-container" onSubmit={this.handleSubmit}>
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
                value={this.state.messageID}
                onChange={this.handleChange}
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
