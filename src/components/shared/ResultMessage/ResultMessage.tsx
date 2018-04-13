import * as React from 'react';

import IResultMessageProps from './IResultMessageProps';
import './ResultMessage.css';

export default function ResultMessage(props: IResultMessageProps) {
    if (props.success === undefined) {
        return null;
    } else if (props.success) {
        return (
            <React.Fragment>
                <div className="eventreplay-result-message eventreplay-result-success">
                    Event replayed successfully.
                </div>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <div className="eventreplay-result-message eventreplay-result-error">
                    {`Unable to replay event. Error ${props.errorCode} - ${props.errorMessage}.`}
                </div>
            </React.Fragment>
        );
    }
}
