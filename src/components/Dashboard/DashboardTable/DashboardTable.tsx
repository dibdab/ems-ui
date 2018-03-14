import * as React from 'react';
import { connect } from 'react-redux';

import { IDashboardTableProps } from './IDashboardTableProps';
import './DashboardTable.css';

import { DashboardTableHead } from './DashboardTableHead/DashboardTableHead';
import { DashboardTableBody } from './DashboardTableBody/DashboardTableBody';
import DashboardTableSearchForm from './DashboardTableSearchForm/DashboardTableSearchForm';

import { IRootState } from 'redux_';
import { getTableData, getAllEventNames, getSubscribedEventNames } from 'services';
import { tableTypes } from 'enums';

export class DashboardTable extends React.Component<IDashboardTableProps, IRootState> {

  componentDidMount() {

    if (this.props.tableName === tableTypes.Events) {
      getAllEventNames('default');
    } else if (this.props.tableName === tableTypes.Subscribers) {
      getSubscribedEventNames('default');
      getTableData(this.props.tableName, '', 10);
    }
  }

  render() {
    let eventNames;
    let eventNamesIsLoading;
    if (this.props.tableName === tableTypes.Events) {
      eventNames = this.props.allEventNames;
      eventNamesIsLoading = this.props.allEventNamesIsLoading;
    } else {
      eventNames = this.props.subscribedEventNames;
      eventNamesIsLoading = this.props.subscribedEventNamesIsLoading;
    }
    let loadingSpinner;
    if (this.props.tableDataIsLoading) {
      loadingSpinner = <div className="loader">Loading...</div>;
    } else {
      loadingSpinner = null;
    }
    return (
      <React.Fragment>
        <DashboardTableSearchForm
          tableName={this.props.tableName}
          filter={this.props.tableDataFilter}
          eventNames={eventNames}
          eventNamesIsLoading={eventNamesIsLoading}
        />
        {loadingSpinner}
        <div className="dashboardTable-results-count">
          {this.props.tableData.length} {this.props.tableName} found.
        </div>
        <table className="dashboardTable">
          <DashboardTableHead columnHeadings={this.props.columnHeadings} />
          <DashboardTableBody
            columnKeyNames={this.props.columnKeyNames}
            tableName={this.props.tableName}
            tableData={this.props.tableData}
            isLoading={this.props.tableDataIsLoading}
            hasErrored={this.props.tableDataHasErrored}
            filter={this.props.tableDataFilter}
          />
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    tableData: state.tableData.tableData,
    tableDataHasErrored: state.tableData.tableDataHasErrored,
    tableDataIsLoading: state.tableData.tableDataIsLoading,
    tableDataFilter: state.tableData.tableDataFilter,
    allEventNames: state.eventNames.allEventNames,
    allEventNamesIsLoading: state.eventNames.allEventNamesIsLoading,
    allEventNamesHasErrored: state.eventNames.allEventNamesHasErrored,
    subscribedEventNames: state.eventNames.subscribedEventNames,
    subscribedEventNamesIsLoading: state.eventNames.subscribedEventNamesIsLoading,
    subscribedEventNamesHasErrored: state.eventNames.subscribedEventNamesHasErrored,
  };
};

export default connect(mapStateToProps, {})(DashboardTable);
