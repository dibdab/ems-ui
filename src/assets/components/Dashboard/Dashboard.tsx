import * as React from 'react';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <div className="nav-top">
          <select>
            <option value="db1">DB1</option>
            <option value="db2">DB2</option>
            <option value="db3">DB3</option>
          </select>
        </div>
        <div className="nav-side"></div>
      </div>
    );
  }
}
