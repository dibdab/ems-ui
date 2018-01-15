import * as React from 'react';

import './AccordionTableRow.css';
import { IAccordionTableRowProps } from './IAccordionTableRowProps';

export const AccordionTableRow = (props: IAccordionTableRowProps) => {
  const isAccordionVisibleClass = props.isAccordionVisible
    ? 'visible'
    : 'hidden';
  return (
    <tr
      id={props.accordionId}
      className={`accordionTableRow ${isAccordionVisibleClass}`}
    >
      {props.children}
    </tr>
  );
};
