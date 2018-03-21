import * as React from 'react';
import { connect } from 'react-redux';

import { ISubscribersTableProps } from './ISubscribersTableProps';

import SubscribersTableBody from './SubscribersTableBody/SubscribersTableBody';
import { TableHead } from 'components/shared/TableHead/TableHead';
import TableSearchForm from 'components/shared/TableSearchForm/TableSearchForm';

import { IRootState } from 'redux_';
import { getTableData, getAllEventNames, getSubscribedEventNames } from 'services';
import { tableTypes } from 'enums';

export class SubscribersTable extends React.Component<ISubscribersTableProps, IRootState> {

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
      eventNames = this.props.subscribedEventNames;
      eventNamesIsLoading = this.props.subscribedEventNamesIsLoading;
    } else {
      eventNames = this.props.subscribedEventNames;
      eventNamesIsLoading = this.props.subscribedEventNamesIsLoading;
    }
    let loadingSpinner;
    if (this.props.subscribersIsLoading) {
      loadingSpinner = <div className="loader">Loading...</div>;
    } else {
      loadingSpinner = null;
    }
    return (
      <React.Fragment>
        <TableSearchForm
          tableName={this.props.tableName}
          filter={this.props.subscribersFilter}
          eventNames={eventNames}
          eventNamesIsLoading={eventNamesIsLoading}
        />
        {loadingSpinner}
        <div className="dashboardTable-results-count">
          {this.props.subscribers.length} {this.props.tableName} found.
        </div>
        <table className="dashboardTable">
          <TableHead columnHeadings={this.props.columnHeadings} />
          <tbody>
            <SubscribersTableBody
              {...this.props}
            />
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    subscribers: state.subscribers.subscribers,
    subscribersHasErrored: state.subscribers.subscribersHasErrored,
    subscribersIsLoading: state.subscribers.subscribersIsLoading,
    subscribersFilter: state.subscribers.subscribersFilter,
    subscribedEventNames: state.eventNames.subscribedEventNames,
    subscribedEventNamesIsLoading: state.eventNames.subscribedEventNamesIsLoading,
    subscribedEventNamesHasErrored: state.eventNames.subscribedEventNamesHasErrored,
  };
};

export default connect(mapStateToProps, {})(SubscribersTable);
