import * as React from 'react';

import { IMuleAppStatusDisplayProps } from './IMuleAppStatusDisplayProps';
import './MuleAppStatusDisplay.css';

export const MuleAppStatusDisplay = (props: IMuleAppStatusDisplayProps) => {
  return (
    <div>
      <div>{props.muleAppStatus.application}</div>
      <div>{props.muleAppStatus.message}</div>
      <div>{props.muleAppStatus.port}</div>
      <div>{props.muleAppStatus.version}</div>
    </div>
  );
};

