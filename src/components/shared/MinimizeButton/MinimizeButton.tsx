import * as React from 'react';

import { IMinimizeButtonProps } from './IMinimizeButtonProps';

export default function MinimizeButton(props: IMinimizeButtonProps) {
  return (
    // Needs to be 2 different buttons because font-awesome icons don't recreate with reacts virtual dom
    <React.Fragment>
      <button
        onClick={props.onMinimize}
        className={`minimize-button button ${props.isMinimized ? 'display-none' : ''}`}
      >
        <i
          title="Hide form"
          className="fas fa-angle-up"
        />
        <span />
      </button>
      <button
        onClick={props.onMinimize}
        className={`minimize-button button ${props.isMinimized ? '' : 'display-none'}`}
      >
        <i
          title="Show form"
          className="fas fa-angle-down"
        />
        <span />
      </button>
    </React.Fragment>
  );
}
