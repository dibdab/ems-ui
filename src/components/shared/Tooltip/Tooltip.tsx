import * as React from 'react';

import './Tooltip.css';
import { ITooltipProps } from './ITooltipProps';

export const Tooltip = (props: ITooltipProps) => {
  return (
    <div className="tooltip">
      {props.children}
      <span className="tooltiptext">{props.text}</span>
    </div>
  );
};
