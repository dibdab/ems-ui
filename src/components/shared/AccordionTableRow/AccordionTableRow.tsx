import * as React from 'react';

import ReactJson from 'react-json-view';

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
      <td className="accordionTd" colSpan={6}>
        <div className="json-view-container">
          <ReactJsonViewer isAccordionVisible={props.isAccordionVisible} src={props.jsonData} />
        </div>
      </td>
    </tr>
  );
};

interface IReactJsonViewerProps {
  isAccordionVisible: boolean;
  src: object | object[];
}

const ReactJsonViewer = (props: IReactJsonViewerProps) => {
  if (!props.isAccordionVisible) {
    return null;
  }
  return (
    <ReactJson src={props.src} collapseStringsAfterLength={100} displayDataTypes={false} />
  );
};
