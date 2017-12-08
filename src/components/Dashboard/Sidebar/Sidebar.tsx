import * as React from 'react';

import './Sidebar.css';

export default function Sidebar(): JSX.Element {
  const tables = ['eventtype1', 'eventtype2', 'eventtype3'];
  const tablelist = tables.map((table, index) => (
    <a key={table} className="button">
      {table}
    </a>
  ));
  return (
    <div className="sidebar">
      <input placeholder="Search Events"  />
      <nav >
        {tablelist}
      </nav>
    </div>
  );
}
