import * as React from 'react';
import { connect } from 'react-redux';

import { ITableViewProps } from './ITableViewProps';
import './TableView.css';

import { TableHeader } from './TableHeader/TableHeader';
import { TableBody } from './TableBody/TableBody';
import TableSearchForm from './TableSearchForm/TableSearchForm';

import { IRootState } from 'redux_';
import { getTableData } from 'services';
import { tableDataTypes } from 'enums';
import Config from 'config';

export class TableView extends React.Component<ITableViewProps, IRootState> {
  componentDidMount() {
    // TODO: Force reload of data to skip cache button - uneeded as post requests don't cache
    // TODO: Implment isLoading and hasErroed bools
    getTableData(this.props.tableName, tableDataTypes.Subscribers, Config.SUBSCRIBER_API_URL, '', 10);
  }

  render() {
    let loadingSpinner;
    if (this.props.isLoading) {
      loadingSpinner = <div className="loader">Loading...</div>;
    } else {
      loadingSpinner = null;
    }
    return (
      <React.Fragment>
        <TableSearchForm
          tableName={this.props.tableName}
          filter={this.props.filter}
          resultsCount={this.props.tableData.length}
        />
        {loadingSpinner}
        <table className="tableView">
          <TableHeader columnHeadings={this.props.columnHeadings} />
          <TableBody
            columnKeyNames={this.props.columnKeyNames}
            tableName={this.props.tableName}
            tableData={this.props.tableData}
            filter={this.props.filter}
            isLoading={this.props.isLoading}
          />
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    tableData: state.subscribers.subscribers,
    hasErrored: state.subscribers.subscribersHasErrored,
    isLoading: state.subscribers.subscribersIsLoading,
    filter: state.subscribers.subscribersFilter,
  };
};

export default connect(mapStateToProps, {})(TableView);
