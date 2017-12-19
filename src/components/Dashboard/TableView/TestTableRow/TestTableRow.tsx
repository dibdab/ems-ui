import * as React from 'react';

import './TestTableRow.css';
import { ITestTableRowProps } from './ITestTableRowProps';
import { IRootState } from 'redux_';

export default class TestTableRow extends React.Component<
  ITestTableRowProps,
  IRootState
> {
  render() {
    return (
      <tbody>
        <tr>
          <td>test</td>
        </tr>
      </tbody>
    );
  }
}
