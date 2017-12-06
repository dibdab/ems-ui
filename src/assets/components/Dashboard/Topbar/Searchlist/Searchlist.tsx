import * as React from 'react';

import './Searchlist.css';
import { ISearchlistProps } from './ISearlistProps';

export default function SearchList({
  databaseNames
}: ISearchlistProps): JSX.Element {
  const names = ['DB1', 'DB2', 'DB3'];
  const nameslist = names.map((name, index) => (
    <option key={name} value={name}>
      {name}
    </option>
  ));

  return (
    <div className="topbar-search">
      <input list="databases" className="datalist" placeholder="Enter Database Name" />
      <datalist id="databases">{nameslist}</datalist>
    </div>
  );
}
