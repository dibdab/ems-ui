import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import './TableView.css';
import { TableViewProps } from './ITableViewProps';

export default function TableView({  }: TableViewProps): JSX.Element {
  {
    return (
      <div>
        <div className="button-group elevation-2">
          <button className="button">View</button>
          <button className="button">Add</button>
          <button className="button">Delete</button>
        </div>
      </div>
    );
  }
}
