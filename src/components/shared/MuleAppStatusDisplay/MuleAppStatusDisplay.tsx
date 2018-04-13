import * as React from 'react';

import { IMuleAppStatusDisplayProps } from './IMuleAppStatusDisplayProps';
import './MuleAppStatusDisplay.css';

export const MuleAppStatusDisplay = (props: IMuleAppStatusDisplayProps) => {
  if (props.isLoading) {
    return null;
  }
  return (
    <div>
      <strong>
        {props.muleAppStatus.application} {props.muleAppStatus.version} is up and running on port {props.muleAppStatus.port}
      </strong>
      <br />
      <small>{props.muleAppStatus.message}</small>
    </div>
  );
};
