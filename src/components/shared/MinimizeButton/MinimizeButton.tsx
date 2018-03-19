import * as React from 'react';

import { IMinimizeButtonProps } from './IMinimizeButtonProps';

export default function MinimizeButton(props: IMinimizeButtonProps) {
  return (
    // Needs to be 2 different buttons because font-awesome icons don't recreate with reacts virtual dom
    <React.Fragment>
      <button
        title="Hide form"
        onClick={props.onMinimize}
        className={`minimize-button button ${props.isMinimized ? 'display-none' : ''}`}
      >
        <i className="fas fa-angle-up" />
        <span />
      </button>
      <button
        title="Show form"
        onClick={props.onMinimize}
        className={`minimize-button button ${props.isMinimized ? '' : 'display-none'}`}
      >
        <i className="fas fa-angle-down" />
        <span />
      </button>
    </React.Fragment>
  );
}
