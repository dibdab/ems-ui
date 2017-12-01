import * as React from 'react';

import { ISearchlistProps } from './ISearlistProps';

export default function SearchList(props: ISearchlistProps): JSX.Element {
  const names = props.databaseNames;
  const nameslist = names.map((name, index) => (
    <button tabIndex={(index + 2) / -1} key={name} value={name}>
      {name}
    </button> 
  ));
  return <div>{nameslist}</div>;
}
