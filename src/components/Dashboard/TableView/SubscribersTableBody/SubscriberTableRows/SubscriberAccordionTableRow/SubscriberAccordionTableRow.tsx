import * as React from 'react';

import './SubscriberAccordionTableRow.css';
import { ISubscriberAccordionTableRowProps } from './ISubscriberAccordionTableRowProps';

import { AccordionTableRow } from 'components/shared/AccordionTableRow/AccordionTableRow';

export const SubscriberAccordionTableRow = (
  props: ISubscriberAccordionTableRowProps,
) => {
  return (
    <AccordionTableRow
      accordionId={'s'}
      isAccordionVisible={props.isAccordionVisible}
    >
      <td />
    </AccordionTableRow>
  );
};
