import * as React from 'react';

import './Topbar.css';
import { ITopbarProps } from './ITopbarProps';
import Searchlist from './Searchlist/Searchlist';

export default function Topbar({ databaseArray }: ITopbarProps) {
  return (
    <div className="topbar-wrapper elevation-4">
      <div className="topbar-header">
        <h1>ems-ui</h1>
      </div>
      {/* <Searchlist databaseNames={databaseArray} /> */}
    </div>
  );
}
