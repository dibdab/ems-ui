import * as React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';

export default function Sidebar(): JSX.Element {
  const tables = ['Subscribers'];
  const tablelist = tables.map((table, index) => (
    <Link
      to="/dashboard/subscribers"
      key={table}
      className="button button-simplelink"
    >
      {table}
    </Link>
  ));
  return (
    <div className="sidebar">
      <input placeholder="Search Events" />
      <nav>{tablelist}</nav>
    </div>
  );
}
