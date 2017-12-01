import * as React from 'react';

import './Topbar.css';
import { ITopbarProps } from './ITopbarProps';
import Searchlist from './Searchlist/Searchlist';

export default class Topbar extends React.Component {
  constructor(props:ITopbarProps) {
    super(props);
    this.state = {
      searchbarValue: ''
    };
  }

  render() {
    return (
      <div className="topbar-wrapper elevation-4">
        <input
          autoFocus={true}
          className="topbar-search"
          type="text"
          list="databases"
          placeholder="Database Name"
          value={this.state.bind(this, searchbarValue)}
        />
        <div className="topbar-search-dropdown">
          <Searchlist databaseNames={['DB1', 'DB2', 'DB3']} />
        </div>
      </div>
    );
  }
}
