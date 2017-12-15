import * as React from 'react';

import './SubscribersTableRow.css';
import { ISubscribersTableRowProps } from './ISubscribersTableRowProps';
import { IRootState } from 'redux_';

export default class SubscribersTableRow extends React.Component<
  ISubscribersTableRowProps,
  IRootState
> {
  render() {
    return <div>subscribers</div>;
  }
}
