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
    if (this.props.subscribers.length <= 0) {
      return (
        <TableSearchForm tableName={this.props.tableName} filter={this.props.filter} />
      );
    }
    return (
      <React.Fragment>
        {/* style returned amount */}
        {this.props.subscribers.length}
        <TableSearchForm tableName={this.props.tableName} filter={this.props.filter} />
        <table className="dashboardTable">
          <TableHeader columnHeadings={this.props.columnHeadings} />
          <TableBody
            columnKeyNames={this.props.columnKeyNames}
            tableName={this.props.tableName}
            subscribers={this.props.subscribers}
            filter={this.props.filter}
          />
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    subscribers: state.subscribers.subscribers,
    hasErrored: state.subscribers.subscribersHasErrored,
    isLoading: state.subscribers.subscribersIsLoading,
    filter: state.subscribers.subscribersFilter,
  };
};

export default connect(mapStateToProps, {})(TableView);
