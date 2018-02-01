import * as React from 'react';
import { connect } from 'react-redux';

import { ITableViewProps } from './ITableViewProps';
import './TableView.css';

import { TableHeader } from './TableHeader/TableHeader';
import { TableBody } from './TableBody/TableBody';
import TableSearchForm from './TableSearchForm/TableSearchForm';

import { IRootState } from 'redux_';

export class TableView extends React.Component<ITableViewProps, IRootState> {
  render() {
    if (this.props.subscribers.length <= 0) {
      return (
        <TableSearchForm tableName={this.props.tableName} />
      )
    }
    else {
      return (
        <React.Fragment>
          {/* style returned amount */}
          {this.props.subscribers.length}
          <TableSearchForm tableName={this.props.tableName} />
          <table className="dashboardTable">
            <TableHeader columnHeadings={this.props.columnHeadings} />
            <TableBody columnKeyNames={this.props.columnKeyNames} tableName={this.props.tableName} subscribers={this.props.subscribers} />
          </table>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    subscribers: state.subscribers.subscribers,
    hasErrored: state.subscribers.subscribersHasErrored,
    isLoading: state.subscribers.subscribersIsLoading,
  };
};

export default connect(mapStateToProps, {})(TableView);