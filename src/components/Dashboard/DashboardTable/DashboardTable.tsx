import * as React from 'react';
import { connect } from 'react-redux';

import { IDashboardTableProps } from './IDashboardTableProps';
import './DashboardTable.css';

import { DashboardTableHead } from './DashboardTableHead/DashboardTableHead';
import { DashboardTableBody } from './DashboardTableBody/DashboardTableBody';
import DashboardTableSearchForm from './DashboardTableSearchForm/DashboardTableSearchForm';

import { IRootState } from 'redux_';
import { getTableData } from 'services';
import { tableDataTypes } from 'enums';
import Config from 'config';

export class DashboardTable extends React.Component<IDashboardTableProps, IRootState> {
  componentDidMount() {
    getTableData(this.props.tableName, tableDataTypes.Subscribers, Config.SUBSCRIBER_API_URL, '', 10);
  }

  render() {
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
          resultsCount={this.props.tableData.length}
        />
        {loadingSpinner}
        <table className="dashboardTable">
          <DashboardTableHead columnHeadings={this.props.columnHeadings} />
          <DashboardTableBody
            columnKeyNames={this.props.columnKeyNames}
            tableName={this.props.tableName}
            tableData={this.props.tableData}
            filter={this.props.tableDataFilter}
            isLoading={this.props.tableDataIsLoading}
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
  };
};

export default connect(mapStateToProps, {})(DashboardTable);
