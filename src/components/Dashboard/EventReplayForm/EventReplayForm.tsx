import * as React from 'react';

import { replayEvent } from 'services';
import TextInput from 'components/shared/TextInput/TextInput';
import ResultMessage from 'components/shared/ResultMessage/ResultMessage';
import LoadingSpinner from 'components/shared/LoadingSpinner/LoadingSpinner';

import IEventReplayFormProps from './IEventReplayFormProps';
import IEventReplayFormState from './IEventReplayFormState';
import './EventReplayForm.css';

export default class EventReplayForm extends React.Component<IEventReplayFormProps, IEventReplayFormState> {
  constructor(props: IEventReplayFormProps) {
    super(props);
    this.state = { messageID: this.props.messageID };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    replayEvent(this.state.messageID);
    e.preventDefault();
  }

  onChange = (messageID: string) => {
    this.setState({ messageID });
  }

  render() {
    return (
      <React.Fragment>
        <LoadingSpinner isLoading={this.props.isLoading} />
        <form className="replay-form-container" onSubmit={this.handleSubmit}>
          <p >
            Enter event messageID and hit replay.
          </p>
          <div className="input-container-group">
            <TextInput value={this.state.messageID} onChange={this.onChange} />
            <div className="input-container">
              <button title="Replay" className="button button-bordered button-text elevation-2" type="submit">
                Replay
              </button>
            </div>
            <ResultMessage
              success={this.props.response.success}
              errorCode={this.props.response.errorCode}
              errorMessage={this.props.response.errorMessage}
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}
