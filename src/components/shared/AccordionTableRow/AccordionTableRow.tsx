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
        <div className="json-view-container">
          <ReactJsonViewer isAccordionVisible={props.isAccordionVisible} src={props.jsonData} collapseStringsAfterLength={100}>
          </ReactJsonViewer>
        </div>
      </td>
    </tr>
  );
};

interface ipropsses {
  isAccordionVisible: boolean;
  src: object | object[];
  collapseStringsAfterLength: number;
}

const ReactJsonViewer = (props: ipropsses) => {
  if (!props.isAccordionVisible) {
    return null;
  }
  return (

    <ReactJson src={props.src} collapseStringsAfterLength={100} />
  )
}
