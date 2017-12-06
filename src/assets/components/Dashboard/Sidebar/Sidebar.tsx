import * as React from 'react';

import './Sidebar.css';

export default function Sidebar(): JSX.Element {
  const tables = ['DB1-table1', 'DB1-table2', 'DB1-table3'];
  const tablelist = tables.map((table, index) => (
    <a key={table} className="button">
      {table}
    </a>
  ));
  return (
    <div className="sidebar">
      <nav >
        {tablelist}
      </nav>
    </div>
  );
}
