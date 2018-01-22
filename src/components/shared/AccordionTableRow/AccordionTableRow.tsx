import * as React from 'react';

import ReactJson from 'react-json-view'

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
      <td className="accordionTd" colSpan={6}>
        <ReactJson src={props.jsonData} collapseStringsAfterLength={100} />
      </td>
    </tr>
  );
};
